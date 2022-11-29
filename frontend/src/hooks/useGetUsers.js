import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Obtiene todos los datos de los usuarios de la API
 * @param {string} API - URL de la API
 * @returns - todos los usuarios en JSON
 */
const useGetUsers = (API) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${API}/users`);
      setUsers(response.data);
    }
    fetchData();
  }, []);

  return users;
};

export default useGetUsers;
