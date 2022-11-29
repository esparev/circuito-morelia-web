import React, { useEffect } from 'react';

const Unit = () => {
  useEffect(() => {
    document.title = 'Unidad';
    window.scrollTo(0, 0);
  }, []);
};

export default Unit;
