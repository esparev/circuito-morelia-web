'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(USER_TABLE, [
			{
				slug: 'esparev',
				name: 'JoseMa Esparev',
				email: 'esparev@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'hero',
			},
			{
				slug: 'lpaz',
				name: 'Lupita Paz',
				email: 'lpaz@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'hero',
			},
			{
				slug: 'eljhonnyx',
				name: 'Jhonatan Rodriguez',
				email: 'brandon@hotmail.com',
				password:
					'$2b$13$oP9JNy3eHStLEdrTc9KDR.sMz9R2cwntXEFR0Yc3AwT3yhMswtbuO',
				role: 'hero',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(USER_TABLE, null);
	},
};
