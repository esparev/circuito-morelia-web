import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePageHeader from '@components/SinglePageHeader';
import AssignDriverModal from '@components/AssignDriverModal';
import EditUnitModal from '@components/EditUnitModal';
import DeleteUnitModal from '@components/DeleteUnitModal';
import UnitItem from '@components/UnitItem';
import DriverItem from '@components/DriverItem';
import useGetUnit from '@hooks/useGetUnit';
import useGetUnits from '@hooks/useGetUnits';
import { envConfig } from '@config';

const Unit = () => {
  const { slug } = useParams();
  const unit = useGetUnit(envConfig.apiUrl, slug);
  const { driver } = useGetUnit(envConfig.apiUrl, slug);
  console.log(driver);
  const allUnits = useGetUnits(envConfig.apiUrl);
  const units = allUnits.filter((otherUnit) => otherUnit.number !== unit.number);

  useEffect(() => {
    document.title = 'Unidad';
    window.scrollTo(0, 0);
  }, []);

  const showAssignModal = () => {
    const modal = document.querySelector('.assign__modal');
    modal.classList.add('modal--show');
  };

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
        otherEntityName='Conductor'
        hasExtraButton
        isDriverBtn
        onAssign={showAssignModal}
        onEdit={showEditModal}
        onDelete={showDeleteModal}
      />

      <main className='hero'>
        {driver ? (
          <>
            {driver.length > 0 ? (
              <>
                <h2 className='title--h2'>Conductores de la unidad</h2>
                <div className='entities__list'>
                  {driver.map((driver) => (
                    <DriverItem
                      key={driver.id}
                      name={driver.name}
                      route={`/conductores/${driver.slug}`}
                      // onRoute={driver.onRoute}
                      // location={driver.location}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </>
        ) : null}
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

      <AssignDriverModal unitId={unit.id} />
      <EditUnitModal number={unit.number} />
      <DeleteUnitModal number={unit.number} />
    </>
  );
};

export default Unit;
