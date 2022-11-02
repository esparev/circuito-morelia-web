import React from 'react';
import UnitItem from '@components/UnitItem';
import '@styles/Entities.css';

const Units = () => {
  return (
    <>
      <UnitItem
        unitNumber='115'
        onRoute={false}
        location='Técnologico de Morelia'
      />
    </>
  );
};

export default Units;
