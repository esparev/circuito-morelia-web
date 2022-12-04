import React from 'react';
import EditButton from '@components/EditButton';
import DeleteButton from '@components/DeleteButton';
import '@styles/PageHeader.css';

const PageHeader = (props) => {
  const {
    title,
    info,
    entityName,
    otherEntityName,
    hasExtraButton,
    isDriverBtn,
    onAssign,
    onEdit,
    onDelete,
  } = props;

  return (
    <div className='page__header hero'>
      <div className='single-page__header--left'>
        <h1 className='page__header--title'>{title}</h1>
        <p className='single-page__header--info'>{info}</p>
      </div>
      <div className='page__header--right'>
        {hasExtraButton ? (
          <>
            {isDriverBtn ? (
              <button className='crud-button crud-button--black' onClick={onAssign}>
                <svg
                  className='icon--16 icon--white'
                  viewBox='0 0 72 72'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15 36H36M57 36H36M36 36V15M36 36V57'
                    strokeWidth='6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Asignar {otherEntityName}
              </button>
            ) : (
              <button className='crud-button crud-button--black' onClick={onAssign}>
                <svg
                  className='icon--16 icon--white'
                  viewBox='0 0 72 72'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15 36H36M57 36H36M36 36V15M36 36V57'
                    strokeWidth='6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Asignar {entityName}
              </button>
            )}
          </>
        ) : null}
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
