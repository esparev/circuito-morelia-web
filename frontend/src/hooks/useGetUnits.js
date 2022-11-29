import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Obtiene todos los datos de las unidades de la API
 * @param {string} API - URL de la API
 * @returns - todas las unidades en JSON
 */
const useGetUnits = (API) => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${API}/units`);
      setUnits(response.data);
    }
    fetchData();
  }, []);

  return units;
};

export default useGetUnits;
