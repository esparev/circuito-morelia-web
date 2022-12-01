import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SuccessAlert from '@components/SuccessAlert';
import ErrorAlert from '@components/ErrorAlert';
import axios from 'axios';
import { authConfig } from '@constants';
import { envConfig } from '@config';
import '@styles/Modal.css';

const DeleteDriverModal = (props) => {
  const { slug } = props;

  const [confirmed, setConfirm] = useState(false);

  const deleteDriver = async (url, config) => {
    const root = ReactDOM.createRoot(document.querySelector('.alert'));

    await axios
      .delete(url, config)
      .then((res) => {
        root.render(<SuccessAlert successMessage={'¡Conductor eliminado exitosamente!'} />);
        setTimeout(() => {
          document.querySelector('.alert__container').classList.remove('animate__slideInDown');
          document.querySelector('.alert__container').classList.add('animate__slideOutUp');
          setTimeout(() => {
            root.unmount();
          }, 500);
        }, 5000);
      })
      .catch((error) => {
        root.render(
          <ErrorAlert errorMessage={'¡Ups!, Hubo un error al eliminar al conductor.'} />
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
    const modal = document.querySelector('.delete__modal');
    modal.classList.remove('modal--show');
    setConfirm(false);
  };

  const confirmAction = () => {
    setConfirm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteDriver(`${envConfig.apiUrl}/users/${slug}`, authConfig);
    hideModal();
  };

  return (
    <div className='delete__modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Eliminar Conductor</h2>
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
        {confirmed ? (
          <div className='modal__form'>
            <h3 className='modal__form--title'>
              ¿Está seguro que desea eliminar al Conductor?
            </h3>
            <p className='modal__form--text'>Esta acción es irreversible.</p>
            <div className='delete-modal__form'>
              <button className='crud-button crud-button--red' type='button' onClick={handleSubmit}>
                Eliminar
              </button>
              <button className='crud-button crud-button--black' type='button' onClick={hideModal}>
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className='modal__form'>
            <button className='crud-button crud-button--red' type='button' onClick={confirmAction}>
              Eliminar Conductor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteDriverModal;
