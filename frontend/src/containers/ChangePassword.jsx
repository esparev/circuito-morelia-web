import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { envConfig } from '@config';
import CircuitoMorelia from '@img/Circuito_Morelia.png';
import '@styles/Login.css';

const ChangePassword = () => {
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');

  useEffect(() => {
    document.title = 'Cambiar Contraseña';
    window.scrollTo(0, 0);
  }, []);

  const initialValues = () => {
    return { token: '', newPassword: '' };
  };

  const validationSchema = () => {
    return {
      newPassword: Yup.string().required('Por favor ingrese su contraseña'),
    };
  };

  const changePassword = async (url, data) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .post(url, data)
      .then((res) => {
        root.render(<SuccessAlert successMessage={'¡Se ha cambiado tu contraseña!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
            window.location.href = '/#/inicia-sesion';
          }, 100);
        }, 3000);
      })
      .catch((error) => {
        root.render(<ErrorAlert errorMessage={'¡Ups!, Hubo un error al cambiar la contraseña.'} />);
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
    onSubmit: (data) => {
      data.token = token;
      changePassword(`${envConfig.apiUrl}/auth/change-password`, data);
    },
  });

  return (
    <>
      <div className='alert'></div>

      <div className='login'>
        <figure className='login__figure'>
          <img className='login__figure--img' src={CircuitoMorelia} alt='' />
        </figure>
        <h1 className='login--title'>Cambia tu contraseña</h1>
        <p className='login--txt'>Ingresa tu nueva contraseña para seguir explorando el circuito</p>
        <form className='login__form' onSubmit={formik.handleSubmit}>
          <div className='login__form-field'>
            <label className='login__form-field--lbl' htmlFor='newPassword'>
              Contraseña
            </label>
            <input
              className='login__form-field--input'
              id='password'
              name='newPassword'
              type='password'
              placeholder='Ingresa tu contraseña'
              onChange={formik.handleChange}
              value={formik.values.newPassword}
            />
            <span className='login__form-field--err'>{formik.errors.newPassword}</span>
          </div>
          <button className='login__form--btn' id='send-btn' type='submit'>
            Cambiar contraseña
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
