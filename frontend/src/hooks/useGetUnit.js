import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Obtiene los datos de la unidad con el
 * id proporcionado de la API
 * @param {*} API - URL de la API
 * @param {*} unitId - id de la unidad
 * @returns - datos de la unidad en JSON
 */
const useGetUnit = (API, unitId) => {
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${API}/units/${unitId}`);
      setUnit(response.data);
    }
    fetchData();
  }, []);

  return unit;
};

export default useGetUnit;
