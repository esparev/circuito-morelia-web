import React, { useState } from 'react';
import '@styles/PageHeader.css';

const PageHeader = (props) => {
  const { title, isHomePage, isFilter } = props;

  const [activeChip, setActiveChip] = useState(false);

  const handleToggle = (e) => {
    const chip = document.querySelector(`[value=${e.currentTarget.getAttribute('value')}]`);
    const chipIco = e.currentTarget.childNodes[0];
    const chipTxt = e.currentTarget.childNodes[1];

    if (e.currentTarget.getAttribute('class').includes('filter__chip--active')) {
      setActiveChip(true);
    } else {
      setActiveChip(false);
    }

    if (activeChip) {
      chip.classList.remove('filter__chip--active');
      chipIco.classList.remove('icon--white');
      chipTxt.classList.remove('filter__chip--txt--active');
    } else {
      chip.classList.add('filter__chip--active');
      chipIco.classList.add('icon--white');
      chipTxt.classList.add('filter__chip--txt--active');
    }
  };

  return (
    <div className='page__header hero'>
      <div className='page__header--left'>
        <h1 className='page__header--title'>{title}</h1>
        {isFilter ? (
          <div className='page__filters'>
            <div className='page__filters--lbl'>
              <svg
                className='icon--24 icon--black'
                width='72'
                height='72'
                viewBox='0 0 72 72'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 18H60M18 30H54M24 42H48M30 54H42'
                  strokeWidth='6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='page__filters--txt'>Filtrar:</p>
            </div>

            {isHomePage ? (
              <>
                <button className='filter__chip' type='button' value='stops' onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M36 36C42.6274 36 48 30.6274 48 24C48 17.3726 42.6274 12 36 12C29.3726 12 24 17.3726 24 24C24 30.6274 29.3726 36 36 36ZM36 36V60'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <p className='filter__chip--txt'>Paradas</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='onService'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18 57H14C12.8954 57 12 56.1046 12 55V39M18 57V61.5C18 62.3284 18.6716 63 19.5 63V63C20.3284 63 21 62.3284 21 61.5V57M18 57H21M54 57H58C59.1046 57 60 56.1046 60 55V39M54 57V61.5C54 62.3284 53.3284 63 52.5 63V63C51.6716 63 51 62.3284 51 61.5V57M54 57H51M12 39V21M12 39H36M60 39V21M60 39H36M21 57H51M12 21V13C12 10.7909 13.7909 9 16 9H56C58.2091 9 60 10.7909 60 13V21M12 21H36M60 21H36M36 21V39'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M24 48H24.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M48 48H48.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>En Ruta</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='noService'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M24 9H56C58.2091 9 60 10.7909 60 13V21M57 57H54M18 57H14C12.8954 57 12 56.1046 12 55V39M18 57V61.5C18 62.3284 18.6716 63 19.5 63V63C20.3284 63 21 62.3284 21 61.5V57M18 57H21M54 57V61.5C54 62.3284 53.3284 63 52.5 63V63C51.6716 63 51 62.3284 51 61.5V57M54 57H51M12 39V21M12 39H39M60 39V21M60 39H54M60 39V45M21 57H51M12 21V12M12 21H21M60 21H36'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M24 48H24.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M48 48H48.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 9L63 63'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>Fuera de Servicio</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='outboundRoute'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M57 36L39 18M57 36L39 54M57 36H15'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>Ruta de Ida</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='returnRoute'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M15 36L33 18M15 36L33 54M15 36H57'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>Ruta de Regreso</p>
                </button>
              </>
            ) : (
              <>
                <button
                  className='filter__chip'
                  type='button'
                  value='onService'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18 57H14C12.8954 57 12 56.1046 12 55V39M18 57V61.5C18 62.3284 18.6716 63 19.5 63V63C20.3284 63 21 62.3284 21 61.5V57M18 57H21M54 57H58C59.1046 57 60 56.1046 60 55V39M54 57V61.5C54 62.3284 53.3284 63 52.5 63V63C51.6716 63 51 62.3284 51 61.5V57M54 57H51M12 39V21M12 39H36M60 39V21M60 39H36M21 57H51M12 21V13C12 10.7909 13.7909 9 16 9H56C58.2091 9 60 10.7909 60 13V21M12 21H36M60 21H36M36 21V39'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M24 48H24.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M48 48H48.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>En Ruta</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='noService'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M24 9H56C58.2091 9 60 10.7909 60 13V21M57 57H54M18 57H14C12.8954 57 12 56.1046 12 55V39M18 57V61.5C18 62.3284 18.6716 63 19.5 63V63C20.3284 63 21 62.3284 21 61.5V57M18 57H21M54 57V61.5C54 62.3284 53.3284 63 52.5 63V63C51.6716 63 51 62.3284 51 61.5V57M54 57H51M12 39V21M12 39H39M60 39V21M60 39H54M60 39V45M21 57H51M12 21V12M12 21H21M60 21H36'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M24 48H24.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M48 48H48.003'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 9L63 63'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>Fuera de Servicio</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='outboundRoute'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M57 36L39 18M57 36L39 54M57 36H15'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>Ruta de Ida</p>
                </button>
                <button
                  className='filter__chip'
                  type='button'
                  value='returnRoute'
                  onClick={handleToggle}>
                  <svg
                    className='icon--20 icon--gray'
                    width='72'
                    height='72'
                    viewBox='0 0 72 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M15 36L33 18M15 36L33 54M15 36H57'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='filter__chip--txt'>Ruta de Regreso</p>
                </button>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeader;
