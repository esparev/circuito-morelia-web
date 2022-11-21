import React from 'react';
import PageHeader from '@components/PageHeader';
import DriverItem from '@components/DriverItem';

const Drivers = () => {
  const drivers = [
    {
      name: 'Jacinto Hernández',
      unitNumber: 101,
      location: 'Tecnológico de Morelia',
      onRoute: true,
      distanceInTime: 5,
      distanceInKm: 5,
    },
    {
      name: 'Jacinto Hernández',
      unitNumber: 115,
      location: 'Psicología',
      onRoute: true,
      distanceInTime: 12,
      distanceInKm: 5,
    },
    {
      name: 'Jacinto Hernández',
      unitNumber: 120,
      location: 'Lomas de Morelia',
      onRoute: true,
      distanceInTime: 60,
      distanceInKm: 5,
    },
    {
      name: 'Jacinto Hernández',
      unitNumber: 114,
      location: 'Las Américas',
      onRoute: true,
      distanceInTime: 30,
      distanceInKm: 5,
    },
    {
      name: 'Jacinto Hernández',
      unitNumber: 105,
      location: 'Plaza Fiesta Camelinas',
      onRoute: true,
      distanceInTime: 73,
      distanceInKm: 5,
    },
    {
      name: 'Jacinto Hernández',
      unitNumber: 90,
      location: 'Crucero Mil Cumbres',
      onRoute: true,
      distanceInTime: 47,
      distanceInKm: 5,
    },
    {
      name: 'Jacinto Hernández',
      unitNumber: 21,
      location: 'Policía y Tránsito',
      onRoute: false,
      distanceInTime: 47,
      distanceInKm: 5,
    },
  ];

  return (
    <>
      <PageHeader title='Conductores' />

      <main className='hero'>
        <div className='entities__list'>
          {drivers.map((driver) => (
            <DriverItem
              key={driver.unitNumber}
              name={driver.name}
              unitNumber={driver.unitNumber}
              onRoute={driver.onRoute}
              location={driver.location}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Drivers;
