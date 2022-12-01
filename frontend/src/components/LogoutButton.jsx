import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/Button.css';

const LogoutButton = (props) => {
  const { onClick } = props;

  return (
    <Link
      className='crud-button crud-button--black menu__logout--btn'
      to='/inicia-sesion'
      onClick={onClick}>
      <svg
        className='icon--16 icon--white'
        viewBox='0 0 72 72'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
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
    </Link>
  );
};

export default LogoutButton;
