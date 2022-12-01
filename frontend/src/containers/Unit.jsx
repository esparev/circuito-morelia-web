import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePageHeader from '@components/SinglePageHeader';
import EditUnitModal from '@components/EditUnitModal';
import DeleteUnitModal from '@components/DeleteUnitModal';
import UnitItem from '@components/UnitItem';
import useGetUnit from '@hooks/useGetUnit';
import useGetUnits from '@hooks/useGetUnits';
import { envConfig } from '@config';

const Unit = () => {
  const { slug } = useParams();
  const unit = useGetUnit(envConfig.apiUrl, slug);
  const allUnits = useGetUnits(envConfig.apiUrl);
  const units = allUnits.filter((otherUnit) => otherUnit.number !== unit.number);

  useEffect(() => {
    document.title = 'Unidad';
    window.scrollTo(0, 0);
  }, []);

  const showEditModal = () => {
    const modal = document.querySelector('.edit__modal');
    modal.classList.add('modal--show');
  };

  const showDeleteModal = () => {
    const modal = document.querySelector('.delete__modal');
    modal.classList.add('modal--show');
  };

  return (
    <>
      <div className='alert'></div>

      <SinglePageHeader
        title={`Unidad ${unit.number}`}
        info={``}
        entityName='Unidad'
        onEdit={showEditModal}
        onDelete={showDeleteModal}
        isSingleEntity
      />

      <main className='hero'>
        <h2 className='title--h2'>Más Unidades</h2>
        <div className='entities__list'>
          {units.map((unit) => (
            <UnitItem
              key={unit.id}
              number={unit.number}
              route={`/unidades/${unit.number}`}
              // onRoute={unit.onRoute}
              // location={unit.location}
            />
          ))}
        </div>
      </main>

      <EditUnitModal number={unit.number} />
      <DeleteUnitModal number={unit.number} />
    </>
  );
};

export default Unit;
