import React, { useEffect } from 'react';
import AddUnitModal from '@components/AddUnitModal';
import PageHeader from '@components/PageHeader';
import UnitItem from '@components/UnitItem';
import useGetUnits from '@hooks/useGetUnits';
import { envConfig } from '@config';
import '@styles/Entities.css';

const Units = () => {
  // const units = [
  //   {
  //     number: 101,
  //     location: 'Tecnológico de Morelia',
  //     onRoute: true,
  //     distanceInTime: 5,
  //     distanceInKm: 5,
  //   },
  //   {
  //     number: 115,
  //     location: 'Psicología',
  //     onRoute: true,
  //     distanceInTime: 12,
  //     distanceInKm: 5,
  //   },
  //   {
  //     number: 120,
  //     location: 'Lomas de Morelia',
  //     onRoute: true,
  //     distanceInTime: 60,
  //     distanceInKm: 5,
  //   },
  //   {
  //     number: 114,
  //     location: 'Las Américas',
  //     onRoute: true,
  //     distanceInTime: 30,
  //     distanceInKm: 5,
  //   },
  //   {
  //     number: 105,
  //     location: 'Plaza Fiesta Camelinas',
  //     onRoute: true,
  //     distanceInTime: 73,
  //     distanceInKm: 5,
  //   },
  //   {
  //     number: 90,
  //     location: 'Crucero Mil Cumbres',
  //     onRoute: true,
  //     distanceInTime: 47,
  //     distanceInKm: 5,
  //   },
  //   {
  //     number: 21,
  //     location: 'Policía y Tránsito',
  //     onRoute: false,
  //     distanceInTime: 47,
  //     distanceInKm: 5,
  //   },
  // ];
  const units = useGetUnits(envConfig.apiUrl);

  useEffect(() => {
    document.title = 'Unidades';
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--show');
  };

  return (
    <>
      <PageHeader title='Unidades' entityName='Unidad' isFilter isAddable onClick={showModal} />

      <main className='hero'>
        <div className='entities__list'>
          {units.map((unit) => (
            <UnitItem
              key={unit.id}
              number={unit.number}
              // onRoute={unit.onRoute}
              // location={unit.location}
            />
          ))}
        </div>
      </main>

      <AddUnitModal />
    </>
  );
};

export default Units;
