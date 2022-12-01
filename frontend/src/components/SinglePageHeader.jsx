import React from 'react';
import EditButton from '@components/EditButton';
import DeleteButton from '@components/DeleteButton';
import '@styles/PageHeader.css';

const PageHeader = (props) => {
  const { title, info, entityName, onEdit, onDelete } = props;

  return (
    <div className='page__header hero'>
      <div className='single-page__header--left'>
        <h1 className='page__header--title'>{title}</h1>
        <p className='single-page__header--info'>{info}</p>
      </div>
      <div className='page__header--right'>
        {localStorage.getItem('role') === 'hero' || localStorage.getItem('role') === 'admin' ? (
          <>
            <EditButton entityName={entityName} onClick={onEdit} />
            <DeleteButton entityName={entityName} onClick={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeader;
