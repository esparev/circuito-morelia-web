import React, { useEffect } from 'react';

const Driver = () => {
  useEffect(() => {
    document.title = 'Conductor';
    window.scrollTo(0, 0);
  }, []);
};

export default Driver;
