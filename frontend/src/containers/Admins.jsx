import React, { useEffect } from 'react';
import AddAdminModal from '@components/AddAdminModal';
import PageHeader from '@components/PageHeader';
import AdminItem from '@components/AdminItem';
import useGetUsers from '@hooks/useGetUsers';
import { envConfig } from '@config';
import '@styles/Entities.css';

const Admins = () => {
  const users = useGetUsers(envConfig.apiUrl);
  const admins = users.filter((admin) => admin.role !== 'driver' && admin.role !== 'client');

  useEffect(() => {
    document.title = 'Administradores';
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--show');
  };

  return (
    <>
      <div className='alert'></div>

      <PageHeader
        title='Administradores'
        entityName='Administrador'
        isAddable
        onClick={showModal}
      />

      <main className='hero'>
        <div className='entities__list'>
          {admins.map((admin) => (
            <AdminItem
              key={admin.id}
              name={admin.name}
              email={admin.email}
              route={`/admins/${admin.slug}`}
              // onRoute={admin.onRoute}
              // location={admin.location}
            />
          ))}
        </div>
      </main>

      <AddAdminModal />
    </>
  );
};

export default Admins;
