import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import axios from 'axios';
import slugify from 'slugify';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import '@styles/Modal.css';

const AddAdminModal = () => {
  const [form, setValues] = useState({
    slug: '',
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const addAdmin = async (url, data, config) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .post(url, data, config)
      .then((res) => {
        root.render(<SuccessAlert successMessage={'¡Administrador agregado exitosamente!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 500);
        }, 5000);
      })
      .catch((error) => {
        console.log(data);
        root.render(
          <ErrorAlert errorMessage={'¡Ups!, Hubo un error al agregar al administrador.'} />
        );
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 500);
        }, 5000);
      });
  };

  const hideModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal--show');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /\s+/g;
    form.slug = slugify(form.name.replace(regex, '-'), { lower: true });
    addAdmin(`${envConfig.apiUrl}/users/admin`, form, authConfig);
    hideModal();
  };

  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Agregar Administrador</h2>
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
        <form className='modal__form' onSubmit={handleSubmit}>
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
              required
            />
          </div>
          <button className='crud-button crud-button--black' type='submit'>
            Agregar Administrador
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdminModal;
