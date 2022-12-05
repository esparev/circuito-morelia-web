import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import axios from 'axios';
import slugify from 'slugify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import '@styles/Modal.css';

const EditAdminModal = (props) => {
  const { admin, slug } = props;

  const initialValues = () => {
    return {};
  };

  const validationSchema = () => {
    return {
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string(),
    };
  };

  const hideModal = () => {
    const modal = document.querySelector('.edit__modal');
    modal.classList.remove('modal--show');
  };

  const editAdmin = async (url, data, config) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .patch(url, data, config)
      .then((res) => {
        hideModal();
        root.render(<SuccessAlert successMessage={'¡Administrador editado exitosamente!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
            window.location.href = `/#/${data.slug}`;
          }, 100);
        }, 3000);
      })
      .catch((error) => {
        hideModal();
        root.render(
          <ErrorAlert errorMessage={'¡Ups!, Hubo un error al editar al administrador.'} />
        );
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 100);
        }, 3000);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      const regex = /\s+/g;
      data.slug = slugify(data.name.replace(regex, '-'), { lower: true });
      editAdmin(`${envConfig.apiUrl}/users/${slug}`, data, authConfig);
    },
  });

  return (
    <div className='edit__modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Editar Administrador</h2>
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
        <form className='modal__form' onSubmit={formik.handleSubmit}>
          <div className='modal__form-field'>
            <label className='modal__form-field--lbl' htmlFor='name'>
              Nombre
            </label>
            <input
              className='modal__form-field--input'
              id='name'
              name='name'
              type='text'
              placeholder={admin.name}
              onChange={formik.handleChange}
              value={formik.values.name}
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
              placeholder={admin.email}
              onChange={formik.handleChange}
              value={formik.values.email}
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
              placeholder='••••••'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <button className='crud-button crud-button--black' type='submit'>
            Editar Administrador
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAdminModal;
