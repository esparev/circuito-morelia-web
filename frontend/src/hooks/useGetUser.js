import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Obtiene los datos del usuario con el
 * id proporcionado de la API
 * @param {*} API - URL de la API
 * @param {*} userSlug - id del usuario
 * @returns - datos del usuario en JSON
 */
const useGetUser = (API, userSlug) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${API}/users/${userSlug}`);
      setUser(response.data);
    }
    fetchData();
  }, []);

  return user;
};

export default useGetUser;
