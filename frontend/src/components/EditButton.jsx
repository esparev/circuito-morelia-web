import React from 'react';
import '@styles/Button.css';

const EditButton = (props) => {
  const { entityName, onClick } = props;

  return (
    <button className='crud-button crud-button--black' onClick={onClick}>
      <svg
        className='icon--16 icon--white'
        viewBox='0 0 72 72'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M42 18L50.2929 9.70711C50.6834 9.31658 51.3166 9.31658 51.7071 9.70711L62.2929 20.2929C62.6834 20.6834 62.6834 21.3166 62.2929 21.7071L54 30M42 18L12.2929 47.7071C12.1054 47.8946 12 48.149 12 48.4142V59C12 59.5523 12.4477 60 13 60H23.5858C23.851 60 24.1054 59.8946 24.2929 59.7071L54 30M42 18L54 30'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      Editar {entityName}
    </button>
  );
};

export default EditButton;
