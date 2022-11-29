'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(USER_TABLE, [
			{
				slug: 'arellano',
				name: 'Antonio Francisco Arellano',
				email: 'antonio.a@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'orellana',
				name: 'Antonio Javier Orellana',
				email: 'antonio.o@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'avellana',
				name: 'Javier Avellana',
				email: 'javier.a@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'bonifacio',
				name: 'Bonifacio Aroca',
				email: 'bonifacio.a@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'lalo-vaquero',
				name: 'Eduardo Jose Vaquero',
				email: 'eduardo.v@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'albatros',
				name: 'Luis Francisco Alba',
				email: 'luis.a@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'caceres',
				name: 'Rogelio Caceres',
				email: 'roger.c@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'montes',
				name: 'Jose Juan Montes',
				email: 'jose.m@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'lafuente',
				name: 'Jesus Maria Lafuente',
				email: 'jesus.l@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'federico',
				name: 'Federico Vargas',
				email: 'federico.v@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'roger',
				name: 'Roger Mateos',
				email: 'roger.m@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'hipolito',
				name: 'Hipolito de Castro',
				email: 'hipolito.c@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'elias',
				name: 'Elias Sousa',
				email: 'elias.s@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'cordero',
				name: 'Luis Manuel Cordero',
				email: 'luis.c@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'rey',
				name: 'Rafael Rey',
				email: 'rafa.r@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'jacinto',
				name: 'Jacinto Carranza',
				email: 'jacinto.c@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'agustin',
				name: 'Agustin Pérez',
				email: 'agustin.p@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'roger2',
				name: 'Rogelio Leal',
				email: 'roger.l@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'celestino',
				name: 'Celestino Melero',
				email: 'celestino.m@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'vizcaino',
				name: 'Jose Vizcaino',
				email: 'jose.v@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'german',
				name: 'German Bermejo',
				email: 'german.b@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'roger3',
				name: 'Rogelio Casals',
				email: 'roger.ca@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'rufino',
				name: 'Rufino Sandoval',
				email: 'rufino.s@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'triple-p',
				name: 'Pedro Pablo Plaza',
				email: 'pedro.p@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'guti',
				name: 'Enric Gutierrez',
				email: 'enric.g@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'aimar',
				name: 'Aimar Andreu',
				email: 'aimar.a@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'torre',
				name: 'Luis Antonio Torre',
				email: 'luis.t@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'florin',
				name: 'Florin Miguel',
				email: 'florin.m@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'charly',
				name: 'Carlos Antonio Becerra',
				email: 'charly.b@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'marcel',
				name: 'Marcel Fajardo',
				email: 'marcel.f@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'iker',
				name: 'Iker Carrascosa',
				email: 'iker.c@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
			{
				slug: 'luismi',
				name: 'Luis Alfonso Salinas',
				email: 'luis.s@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'driver',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(USER_TABLE, null);
	},
};
