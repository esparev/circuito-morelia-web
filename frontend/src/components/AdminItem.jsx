import React from 'react';
import '@styles/Entity.css';

const AdminItem = (props) => {
  const { name, email } = props;

  return (
    <div className='entity'>
      <div className='entity__container'>
        <svg
          className='icon--24 icon--black'
          viewBox='0 0 72 72'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='36'
            cy='24'
            r='15'
            fill='#222227'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M60 63C60 49.7452 49.2548 39 36 39C22.7452 39 12 49.7452 12 63'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M36 39C22.7452 39 12 49.7452 12 63H60C60 49.7452 49.2548 39 36 39Z'
            fill='#222227'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <div className='entity__info'>
          <h3 className='entity__info--title'>{name}</h3>
          <div className='entity__route-info'>
            <p className='entity__route-info--txt'>{email}</p>
          </div>
        </div>
      </div>
      <a className='entity__button' href=''>
        <span>Ver admin</span>
        <svg
          className='icon--20 icon--black'
          viewBox='0 0 72 72'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M30 21L45 36L30 51'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </a>
    </div>
  );
};

export default AdminItem;
