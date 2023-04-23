'use strict';

const { STOP_TABLE } = require('../models/stop.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(STOP_TABLE, [
			// Paradas de Ida
			{
				name: 'Base Siervo de la Nación',
				latitude: 19.685566,
				longitude: -101.235655,
				way_direction: 'Ida',
			},
			{
				name: 'Crucero Salida Quiroga',
				latitude: 19.700330,
				longitude: -101.242968,
				way_direction: 'Ida',
			},
			{
				name: 'Little Caesars Estadio',
				latitude: 19.707781,
				longitude: -101.235822,
				way_direction: 'Ida',
			},
			{
				name: 'Central Camionera (Sala A)',
				latitude: 19.719534,
				longitude: -101.226395,
				way_direction: 'Ida',
			},
			{
				name: 'Central Camionera (Sala B)',
				latitude: 19.719399,
				longitude: -101.225523,
				way_direction: 'Ida',
			},
			{
				name: 'Central Camionera (Sala C)',
				latitude: 19.719531,
				longitude: -101.226391,
				way_direction: 'Ida',
			},
			{
				name: 'Poliforum',
				latitude: 19.724271,
				longitude: -101.196572,
				way_direction: 'Ida',
			},
			{
				name: 'Psicología UMNSH',
				latitude: 19.720682,
				longitude: -101.186277,
				way_direction: 'Ida',
			},
			{
				name: 'Lomas Morelia',
				latitude: 19.716798,
				longitude: -101.174743,
				way_direction: 'Ida',
			},
			{
				name: 'Crucero Salida Charo',
				latitude: 19.709941,
				longitude: -101.166332,
				way_direction: 'Ida',
			},
			{
				name: 'Crucero Mil Cumbres (Fuente El Caminero)',
				latitude: 19.69446,
				longitude: -101.149613,
				way_direction: 'Ida',
			},
			{
				name: 'Plaza Las Américas',
				latitude: 19.687921,
				longitude: -101.157783,
				way_direction: 'Ida',
			},
			{
				name: 'Plaza Fiesta Camelinas',
				latitude: 19.681667,
				longitude: -101.179924,
				way_direction: 'Ida',
			},
			{
				name: 'Star Médica',
				latitude: 19.682535,
				longitude: -101.191504,
				way_direction: 'Ida',
			},
			{
				name: 'CFE Frente a Costco',
				latitude: 19.672399,
				longitude: -101.210093,
				way_direction: 'Ida',
			},
			{
				name: 'Plaza Andador',
				latitude: 19.67386,
				longitude: -101.213099,
				way_direction: 'Ida',
			},
			{
				name: 'Policía y Tránsito',
				latitude: 19.680748,
				longitude: -101.235026,
				way_direction: 'Ida',
			},
			// Paradas de Regreso
      {
				name: 'Base Siervo de la Nación',
				latitude: 19.685566,
				longitude: -101.235655,
				way_direction: 'Regreso',
			},
			{
				name: 'Canchas (Frente a Policía y Tránsito)',
				latitude: 19.680367,
				longitude: -101.235277,
				way_direction: 'Regreso',
			},
			{
				name: 'Pepsi',
				latitude: 19.676982,
				longitude: -101.230445,
				way_direction: 'Regreso',
			},
			{
				name: 'Casa de Gobierno',
				latitude: 19.677770,
				longitude: -101.201855,
				way_direction: 'Regreso',
			},
			{
				name: 'Cenadores (Frente al Zoológico)',
				latitude: 19.681685,
				longitude: -101.194461,
				way_direction: 'Regreso',
			},
			{
				name: 'La Paloma',
				latitude: 19.681194,
				longitude: -101.181202,
				way_direction: 'Regreso',
			},
			{
				name: 'Puente Las Américas',
				latitude: 19.687720,
				longitude: -101.158956,
				way_direction: 'Regreso',
			},
			{
				name: 'Crucero Salida Mil Cumbres',
				latitude: 19.695286,
				longitude: -101.149044,
				way_direction: 'Regreso',
			},
			{
				name: 'Crucero Salida Charo',
				latitude: 19.710371,
				longitude: -101.165338,
				way_direction: 'Regreso',
			},
			{
				name: 'Mercado de Abastos',
				latitude: 19.714913,
				longitude: -101.171644,
				way_direction: 'Regreso',
			},
			{
				name: 'Tecnológico de Morelia',
				latitude: 19.720682,
				longitude: -101.186277,
				way_direction: 'Regreso',
			},
			{
				name: 'Soriana Torreón Nuevo',
				latitude: 19.725029,
				longitude: -101.197865,
				way_direction: 'Regreso',
			},
			{
				name: 'Estadio Morelos',
				latitude: 19.716984,
				longitude: -101.229994,
				way_direction: 'Regreso',
			},
			{
				name: 'Crucero Salida Quiroga',
				latitude: 19.700124,
				longitude: -101.243815,
				way_direction: 'Regreso',
			},
			{
				name: 'OXXO Manantiales',
				latitude: 19.690848,
				longitude: -101.239686,
				way_direction: 'Regreso',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(STOP_TABLE, null);
	},
};
