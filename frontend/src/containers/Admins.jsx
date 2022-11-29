import React, { useEffect } from 'react';
import PageHeader from '@components/PageHeader';
import AdminItem from '@components/AdminItem';
import useGetUsers from '@hooks/useGetUsers';
import { envConfig } from '@config';

const Admins = () => {
  const users = useGetUsers(envConfig.apiUrl);
  const admins = users.filter((admin) => admin.role !== 'driver');

  useEffect(() => {
    document.title = 'Administradores';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title='Administradores' isFilter={false} />

      <main className='hero'>
        <div className='entities__list'>
          {admins.map((admin) => (
            <AdminItem
              key={admin.id}
              name={admin.name}
              email={admin.email}
              // onRoute={admin.onRoute}
              // location={admin.location}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Admins;
