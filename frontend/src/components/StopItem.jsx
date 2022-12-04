import React from 'react';
import '@styles/Entity.css';

const StopItem = (props) => {
  const { location, distanceInTime, distanceInKm } = props;

  return (
    <div className='entity'>
      <div className='entity__container'>
        <svg
          className='icon--24 icon--black'
          viewBox='0 0 72 72'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M54 48.047C57.7342 49.6335 60 51.7176 60 54.0001C60 58.9707 49.2548 63.0001 36 63.0001C22.7452 63.0001 12 58.9707 12 54.0001C12 51.7176 14.2658 49.6335 18 48.047'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M51 25.3333C51 34.6117 36 51 36 51C36 51 21 34.6117 21 25.3333C21 16.0549 27.7157 9 36 9C44.2843 9 51 16.0549 51 25.3333Z'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx='36'
            cy='24'
            r='3'
            strokeWidth='6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <div className='entity__info'>
          <h3 className='entity__info--title'>{location}</h3>
          {distanceInTime < 15 ? (
            <div className='entity__route-info'>
              <p className='entity__route-info--txt'>Más cerca</p>
              <p className='entity__route-info--txt'>•</p>
              <p className='entity__route-info--txt'>{distanceInTime} min de distancia</p>
            </div>
          ) : (
            <div className='entity__route-info'>
              <p className='entity__route-info--txt'>Un poco lejos</p>
              <p className='entity__route-info--txt'>•</p>
              <p className='entity__route-info--txt'>A {distanceInKm}Km</p>
            </div>
          )}
        </div>
      </div>
      <a className='entity__button' href=''>
        <span>Ver en mapa</span>
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

export default StopItem;
