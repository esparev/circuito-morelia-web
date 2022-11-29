import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Obtiene los datos de la parada con el
 * id proporcionado de la API
 * @param {*} API - URL de la API
 * @param {*} stopId - id de la parada
 * @returns - datos de la parada en JSON
 */
const useGetStop = (API, stopId) => {
  const [stop, setStop] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${API}/stops/${stopId}`);
      setStop(response.data);
    }
    fetchData();
  }, []);

  return stop;
};

export default useGetStop;
