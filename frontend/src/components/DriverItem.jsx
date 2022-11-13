import React from 'react';
import '@styles/Entity.css';

const DriverItem = (props) => {
  const { name, unitNumber, onRoute, location } = props;

  return (
    <div className='entity'>
      <div className='entity__container'>
        <svg
          className='icon--24 icon--black'
          width='72'
          height='72'
          viewBox='0 0 72 72'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M63 36C63 50.9117 50.9117 63 36 63C21.0883 63 9 50.9117 9 36M63 36C63 21.0883 50.9117 9 36 9C21.0883 9 9 21.0883 9 36M63 36H48M9 36H24M33 36H39'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M36 45H46C47.1046 45 48 44.1046 48 43V29C48 27.8954 47.1046 27 46 27H26C24.8954 27 24 27.8954 24 29V43C24 44.1046 24.8954 45 26 45H36ZM36 45V63'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <div className='entity__info'>
          <h3 className='entity__info--title'>{name}</h3>
          {onRoute ? (
            <div className='entity__route-info'>
              <p className='entity__route-info--txt'>En ruta</p>
              <p className='entity__route-info--txt'>•</p>
              <p className='entity__route-info--txt'>Unidad {unitNumber}</p>
              <p className='entity__route-info--txt'>•</p>
              <p className='entity__route-info--txt'>Cerca de {location}</p>
            </div>
          ) : (
            <div className='entity__route-info'>
              <p className='entity__route-info--txt'>Fuera de servicio</p>
            </div>
          )}
        </div>
      </div>
      <a className='entity__button' href=''>
        <span>Ver en mapa</span>
        <svg
          className='icon--20 icon--black'
          width='72'
          height='72'
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

export default DriverItem;
