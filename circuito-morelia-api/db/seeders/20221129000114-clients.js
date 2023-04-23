'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(USER_TABLE, [
			{
				slug: 'mohamed',
				name: 'Mohamed Agudo',
				email: 'mohamed.a@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'client',
			},
			{
				slug: 'cuellar',
				name: 'Jesus Antonio Cuellar',
				email: 'jesus.c@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'client',
			},
			{
				slug: 'cheran',
				name: 'Alan Mololongo',
				email: 'cheran.m@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'client',
			},
			{
				slug: 'aranda',
				name: 'Luis Angel Aranda',
				email: 'luis.aa@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'client',
			},
			{
				slug: 'alanbrito',
				name: 'Alan Brito',
				email: 'alan.b@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'client',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(USER_TABLE, null);
	},
};
