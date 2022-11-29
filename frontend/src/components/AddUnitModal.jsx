import React from 'react';
import '@styles/Modal.css';

const AddUnitModal = () => {
  const hideModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal--show');
  };

  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Agregar Unidad</h2>
          <svg
            className='modal__button--close icon--24 icon--black'
            viewBox='0 0 72 72'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={hideModal}>
            <path
              d='M36 36L21 21M36 36L51 51M36 36L51 21M36 36L21 51'
              strokeWidth='7'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <form className='modal__form'>
          <div className='modal__form-field'>
            <label className='modal__form-field--lbl' htmlFor='number'>
              Número de Unidad <span>(Del 0 al 200)</span>
            </label>
            <input
              className='modal__form-field--input'
              id='number'
              name='number'
              type='number'
              placeholder='Ingresa el número de la unidad'
              required
            />
          </div>
          <button className='crud-button crud-button--black'>Agregar Unidad</button>
        </form>
      </div>
    </div>
  );
};

export default AddUnitModal;
