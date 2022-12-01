import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SinglePageHeader from '@components/SinglePageHeader';
import EditAdminModal from '@components/EditAdminModal';
import AdminItem from '@components/AdminItem';
import useGetUser from '@hooks/useGetUser';
import useGetUsers from '@hooks/useGetUsers';
import { envConfig } from '@config';

const Admin = (props) => {
  const { slug } = useParams();
  const admin = useGetUser(envConfig.apiUrl, slug);
  const users = useGetUsers(envConfig.apiUrl);
  const admins = users.filter((admin) => admin.role !== 'driver' && admin.role !== 'client');

  useEffect(() => {
    document.title = 'Administrador';
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--show');
  };

  return (
    <>
      <div className='alert'></div>

      <SinglePageHeader
        title={admin.name}
        info={admin.email}
        entityName='Administrador'
        onEdit={showModal}
        isSingleEntity
      />

      <main className='hero'>
        <h2 className='title--h2'>Más Administradores</h2>
        <div className='entities__list'>
          {admins.map((admin) => (
            <AdminItem
              key={admin.id}
              name={admin.name}
              email={admin.email}
              route={`/admins/${admin.slug}`}
            />
          ))}
        </div>
      </main>

      <EditAdminModal slug={admin.slug} />
    </>
  );
};

export default Admin;
