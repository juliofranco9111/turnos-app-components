import React from 'react';
import moment from 'moment-with-locales-es6';
import { useDispatch, useSelector } from 'react-redux';

import { SelectProfessionalMenu } from './ui/SelectProfessionalMenu';
import { ButtonGeneral } from './ui/ButtonGeneral';
import { Datepicker } from './ui/Datepicker';
import { startCreateAppointment } from '../actions/appointment';

moment.locale('es');

export const SessionReq = () => {
  const dispatch = useDispatch();
  const { professional, date } = useSelector((state) => state.appointment);
  const { uid } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(
      startCreateAppointment({
        professional: professional.id,
        user: uid,
        date,
      })
    );
  };

  return (
    <section
      id='section_date'
      className='w-full max-w-2xl px-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
      <div className='mb-6'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>
          Solicitud de turno
        </h2>
      </div>

      <div>
        <div className='w-full mt-4'>
          <SelectProfessionalMenu {...professional} />

          <a className='underline' href='#'>
            Ver perfil
          </a>
        </div>

        <div className='justify-center'>
          <Datepicker />
        </div>

        <br />

        <div className='block w-full mb-10'>
          {uid && professional && date && (
            <ButtonGeneral
              fn={handleSubmit}
              title='Agendar'
              text='white'
              bg='blue'
            />
          )}
        </div>
      </div>
    </section>
  );
};
