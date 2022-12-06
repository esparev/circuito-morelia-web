import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import EditButton from '@components/EditButton';
import DeleteButton from '@components/DeleteButton';
import DeleteProfileModal from '@components/DeleteProfileModal';
import useGetUser from '@hooks/useGetUser';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import '@styles/Profile.css';

const Profile = () => {
  const slug = localStorage.getItem('slug');
  const profile = useGetUser(envConfig.apiUrl, slug);
  const [form, setValues] = useState({});
  const [disabled, setDisabled] = useState(true);

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

  const editProfile = async (url, data, config) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .patch(url, data, config)
      .then((res) => {
        root.render(<SuccessAlert successMessage={'¡Tu perfil ha sido editado exitosamente!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
            window.location.reload();
          }, 100);
        }, 3000);
      })
      .catch((error) => {
        root.render(<ErrorAlert errorMessage={'¡Ups!, Hubo un error al editar tu perfil.'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 100);
        }, 3000);
      });
  };

  const showModal = () => {
    const modal = document.querySelector('.delete__modal');
    modal.classList.add('modal--show');
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (data) => {
      editProfile(`${envConfig.apiUrl}/users/${slug}`, data, authConfig);
    },
  });

  useEffect(() => {
    document.title = 'Perfil';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='alert'></div>

      <div className='page__header hero'>
        <div className='single-page__header--left'>
          <h1 className='page__header--title'>Mi Perfil</h1>
        </div>
        <div className='page__header--right'>
          <EditButton entityName='Perfil' onClick={() => setDisabled(false)} />
          <DeleteButton entityName='Perfil' onClick={showModal} />
        </div>
      </div>

      <div className='profile'>
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
              placeholder={profile.name}
              disabled={disabled}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <span className='login__form-field--err'>{formik.errors.name}</span>
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
              placeholder={profile.email}
              disabled={disabled}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span className='login__form-field--err'>{formik.errors.email}</span>
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
              disabled={disabled}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span className='login__form-field--err'>{formik.errors.password}</span>
          </div>
          {disabled ? null : (
            <div className='profile__edit--buttons'>
              <button className='crud-button crud-button--black' type='submit'>
                Guardar Cambios
              </button>
              <button
                className='crud-button crud-button--gray'
                type='button'
                onClick={() => setDisabled(true)}>
                Cancelar
              </button>
            </div>
          )}
        </form>
      </div>

      <DeleteProfileModal slug={slug} />
    </>
  );
};

export default Profile;
