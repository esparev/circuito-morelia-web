import React, {useEffect} from 'react';

const Admin = () => {
  useEffect(() => {
    document.title = 'Administrador';
    window.scrollTo(0, 0);
  }, []);
};

export default Admin;
