const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const UsersService = require('./users.service');
const service = new UsersService();
const { config } = require('../config/config');

/**
 * Service layer with CRUD methods
 */
class AuthService {
	constructor() {}

	/**
	 * Encuentra el usuario con el correo y la contraseña
	 * Y valida la existencia de un nombre de usuario
	 * en la comparacion de la contraseña proporcionada
	 * con la contraseña almacenada
	 * @param {*} email - correo del usuario
	 * @param {*} password - contraseña del usuario
	 * @returns - usuario que coincide con el correo y la contraseña
	 */
	async getUser(email, password) {
		// Valida si el usuario existe
		const user = await service.findByEmail(email);
		if (!user) {
			throw boom.unauthorized();
		}
		// Valida si la contraseña es correcta
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			throw boom.unauthorized();
		}
		// Elimina la contraseña del objeto de respuesta
		delete user.dataValues.password;
		return user;
	}

	/**
	 * Firma un token JWT con la informacion
	 * necesaria del usuario para definir su rol
	 * @param {*} user - objeto usuario
	 * @returns - token firmado
	 */
	signToken(user) {
		const payload = {
			// Asunto para identificar al usuario
			sub: user.id,
			// Permiso del usuario
			scope: user.role,
		};
		const token = jwt.sign(payload, config.jwtSecret);
		delete user.dataValues.recoveryToken;

		return {
			user,
			token,
		};
	}


	/**
   * Envia un correo al correo del usuario con
   * el objeto de transporte de nodemailer
	 * @param {*} infoMail - correo del usuario
	 * @returns - mensaje de respuesta
	 */
	async sendMail(infoMail) {
    // Crea un objeto de transporte reutilizable usando el transporte SMTP predeterminado
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			secure: true, // verdadera para 465, falsa para otros puertos
			port: 465,
			auth: {
				user: config.smtpEmail,
				pass: config.smtpPassword,
			},
		});
    // Envia el correo con el objeto de transporte definido
		await transporter.sendMail(infoMail);
		return { message: 'mail enviado' };
	}

	/**
   * Provee informacion al correo
	 * @param {*} email - correo del usuario
	 * @returns - envio de correo
	 */
	async sendRecovery(email) {
		// Valida si el usuario existe
		const user = await service.findByEmail(email);

		if (!user) {
			throw boom.unauthorized();
		}

		const payload = { sub: user.id };
		const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15m' });
		const link = `http://localhost:3006/recuperar?token=${token}`;
		await service.update(user.id, { recoveryToken: token });

		// Envia el correo con el objeto de transporte
		const mail = {
			from: `Circuito Morelia <${config.smtpEmail}>`, // correo remitente
			to: `${user.email}`, // lista de destinatarios
			subject: 'Recuperar contraseña', // asunto del correo
			html: `¡Hola, <b>${user.name}</b>!
			</br>
			</br>
			<b>Ingresa a este link para cambiar tu contraseña:</b>
			</br>
			</br>
			<a href='${link}'>Cambiar contraseña</a>`, // cuerpo del correo
		};

		const response = await this.sendMail(mail);
		return response;
	}

  /**
   * Cambia la contraseña del usuario con el token de recuperacion
   * @param {*} token - token de recuperacion
   * @param {*} newPassword - nueva contraseña
   * @returns - mensaje de respuesta
   */
	async changePassword(token, newPassword) {
		try {
			const payload = jwt.verify(token, config.jwtSecret);
			const user = await service.findOne(payload.sub);

			if (user.recoveryToken !== token) {
				throw boom.unauthorized();
			}

			const hash = await bcrypt.hash(newPassword, 13);
			await service.update(user.id, { recoveryToken: null, password: hash });

			return { message: 'Contraseña modificada' };
		} catch (error) {
			console.log(error);
			throw boom.unauthorized();
		}
	}
}

module.exports = AuthService;
