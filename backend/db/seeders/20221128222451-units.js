'use strict';

const { UNIT_TABLE } = require('../models/unit.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(UNIT_TABLE, [
      { number: 13 },
			{ number: 15 },
			{ number: 33 },
			{ number: 50 },
			{ number: 52 },
			{ number: 54 },
			{ number: 68 },
			{ number: 75 },
			{ number: 82 },
			{ number: 90 },
			{ number: 100 },
			{ number: 101 },
			{ number: 105 },
			{ number: 111 },
			{ number: 114 },
			{ number: 115 },
			{ number: 119 },
			{ number: 125 },
			{ number: 133 },
			{ number: 199 },
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(UNIT_TABLE, null);
	},
};
