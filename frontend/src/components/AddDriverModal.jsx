import React from 'react';
import '@styles/Modal.css';

const AddDriverModal = () => {
  const hideModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal--show');
  };

  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Agregar Conductor</h2>
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
            <label className='modal__form-field--lbl' htmlFor='name'>
              Nombre
            </label>
            <input
              className='modal__form-field--input'
              id='name'
              name='name'
              type='text'
              placeholder='Ingresa el nombre completo'
              required
            />
          </div>
          <div className='modal__form-field'>
            <label className='modal__form-field--lbl' htmlFor='email'>
              Correo electrónico
            </label>
            <input
              className='modal__form-field--input'
              id='email'
              name='email'
              type='email'
              placeholder='Ingresa el correo electrónico'
              required
            />
          </div>
          <div className='modal__form-field'>
            <label className='modal__form-field--lbl' htmlFor='password'>
              Contraseña
            </label>
            <input
              className='modal__form-field--input'
              id='password'
              name='password'
              type='password'
              placeholder='Ingresa la contraseña'
              required
            />
          </div>
          <button className='crud-button crud-button--black'>Agregar Conductor</button>
        </form>
      </div>
    </div>
  );
};

export default AddDriverModal;
