import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/Entity.css';

const UnitItem = (props) => {
  const { number, onRoute, location, route } = props;

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
            d='M66 36V49C66 50.1046 65.1046 51 64 51H60M66 36C66 29 61.8 15 45 15M66 36H52.5086C51.6156 36 50.8309 35.408 50.5856 34.5494L49.2857 30M45 15L49.2857 30M45 15C41.9614 15 38.9425 15 36 15M49.2857 30H36M6 30V17C6 15.8954 6.89414 15 7.99871 15C11.0923 15 15.6206 15 21 15M6 30V49C6 50.1046 6.89543 51 8 51H12M6 30H21M21 15V30M21 15C25.5154 15 30.6304 15 36 15M21 30H36M36 15V30M24 51H48'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx='18'
            cy='51'
            r='6'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx='54'
            cy='51'
            r='6'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <div className='entity__info'>
          <h3 className='entity__info--title'>Unidad {number}</h3>
          {onRoute ? (
            <div className='entity__route-info'>
              <p className='entity__route-info--txt'>En ruta</p>
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
      <Link className='entity__button' to={route}>
      <span>Ver unidad</span>
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
      </Link>
    </div>
  );
};

export default UnitItem;
