import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePageHeader from '@components/SinglePageHeader';
import EditDriverModal from '@components/EditDriverModal';
import DeleteDriverModal from '@components/DeleteDriverModal';
import DriverItem from '@components/DriverItem';
import useGetUser from '@hooks/useGetUser';
import useGetUsers from '@hooks/useGetUsers';
import { envConfig } from '@config';

const Driver = () => {
  const { slug } = useParams();
  const driver = useGetUser(envConfig.apiUrl, slug);
  const users = useGetUsers(envConfig.apiUrl);
  const drivers = users.filter(
    (otherDriver) =>
      otherDriver.role !== 'hero' &&
      otherDriver.role !== 'admin' &&
      otherDriver.role !== 'client' &&
      otherDriver.slug !== driver.slug
  );

  useEffect(() => {
    document.title = 'Conductor';
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
        title={driver.name}
        info={driver.email}
        entityName='Condcutor'
        onEdit={showEditModal}
        onDelete={showDeleteModal}
      />

      <main className='hero'>
        <h2 className='title--h2'>Más Condcutores</h2>
        <div className='entities__list'>
          {drivers.map((driver) => (
            <DriverItem
              key={driver.id}
              name={driver.name}
              email={driver.email}
              route={`/condcutores/${driver.slug}`}
            />
          ))}
        </div>
      </main>

      <EditDriverModal driver={driver} slug={driver.slug} />
      <DeleteDriverModal slug={driver.slug} />
    </>
  );
};

export default Driver;
