import React from 'react';
import '@styles/Button.css';

const LogoutButton = () => {
  return (
    <a className='crud-button crud-button--black menu__logout--btn' href=''>
      <svg
        className='icon--16 icon--white'
        width='72'
        height='72'
        viewBox='0 0 72 72'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M45 9H17C15.8954 9 15 9.89543 15 11V61C15 62.1046 15.8954 63 17 63H45'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M57 36L45 24M57 36L45 48M57 36H27'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      Cerrar sesión
    </a>
  );
};

export default LogoutButton;
