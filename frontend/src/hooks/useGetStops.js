import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Obtiene todos los datos de las paradas de la API
 * @param {string} API - URL de la API
 * @returns - todas las paradas en JSON
 */
const useGetStops = (API) => {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${API}/stops`);
      setStops(response.data);
    }
    fetchData();
  }, []);

  return stops;
};

export default useGetStops;
