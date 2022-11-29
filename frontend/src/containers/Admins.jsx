import React, { useEffect } from 'react';

const Admins = () => {
  useEffect(() => {
    document.title = 'Administradores';
    window.scrollTo(0, 0);
  }, []);
};

export default Admins;
