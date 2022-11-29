import React from 'react';
import '@styles/Button.css';

const DeleteButton = (props) => {
  const { entityName } = props;

  return (
    <a className='crud-button crud-button--red' href=''>
      <svg
        className='icon--16 icon--white'
        viewBox='0 0 72 72'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M27 21V16C27 13.7909 28.7909 12 31 12H41C43.2091 12 45 13.7909 45 16V21M27 21H45M27 21H18M45 21H54M60 21H54M12 21H18M18 21V58C18 59.1046 18.8954 60 20 60H52C53.1046 60 54 59.1046 54 58V21'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      Eliminar {entityName}
    </a>
  );
};

export default DeleteButton;
