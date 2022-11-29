/**
 * Cabezera de autorización para solicitud de API
 */
export const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};
