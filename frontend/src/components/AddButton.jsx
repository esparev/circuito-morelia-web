import React from 'react';
import '@styles/Button.css';

const AddButton = (props) => {
  const { entityName, onClick } = props;

  return (
    <button className='crud-button crud-button--black' type='button' onClick={onClick}>
      <svg
        className='icon--16 icon--white'
        width='72'
        height='72'
        viewBox='0 0 72 72'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15 36H36M57 36H36M36 36V15M36 36V57'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      Agregar {entityName}
    </button>
  );
};

export default AddButton;
