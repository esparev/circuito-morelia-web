/**
 * @description descripcion de cada variable de entorno
 * @typedef {Object} field definicion
 * @property {*} env - define el tipo de entorno - production || dev
 * @property {*} isProd - verifica el entorno tipo production
 * @property {*} port - puerto del servidor
 * @property {*} apiUrl - url de la api
 */
export const envConfig = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  apiUrl: process.env.API_URL,
};
