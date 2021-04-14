import React, { useState } from 'react';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment-with-locales-es6';

import { SelectProfessionalMenu } from './ui/SelectProfessionalMenu';
import { ButtonGeneral } from './ui/ButtonGeneral';
import { useForm } from '../hooks/useForm';
import { InputErrorAlert } from './ui/InputErrorAlert';
import { useDispatch, useSelector } from 'react-redux';
import { startVerifyDocumentUser } from '../actions/appointment';

moment.locale('es');

export const SessionReqScreen = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.appointment);

  const [date, setDate] = useState();
  const [professional, setProfesional] = useState();

  const initialData = {
    userName: 'blabla',
    userEmail: 'test@gmail.com',
    userPhone: '9994112412344',
    userDocument: '111555452',
  };
  const [formValues, handleInputChange] = useForm(initialData);

  const { userName, userEmail, userPhone, userDocument } = formValues;

  const [showModalDate, setShowModalDate] = useState(false);

  const changeProfessional = (professional) => {
    setProfesional(professional);
  };

  const onChangeDate = (e) => {
    setDate(e);
  };

  const handleSubmit = () => {
    const dataSession = {
      date: {
        day: moment(date).format('DD'),
        month: moment(date).format('MM'),
        year: moment(date).format('yyyy'),
      },
      professional,
      pacient: formValues,
    };
    console.log(dataSession);
  };

  const handleVerifyDocument = () => {
    dispatch(startVerifyDocumentUser(userDocument));
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

      <div className='w-full'>
        <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
          Medico
        </label>
        <SelectProfessionalMenu changeProfessional={changeProfessional} />

        <a className='underline' href="#">
          Ver perfil
        </a>
      </div>

      <div id='section_date_buttons' className='w-full my-5'>
        <div>
          <label className='block mb-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-200'>
            Fecha
          </label>

          <input
            readOnly
            value={moment(date).format('DD/MM, dddd')}
            onClick={() => setShowModalDate(true)}
            onChange={handleInputChange}
            className='relative w-full bg-white border border-gray-300
            rounded-md 
            shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>

        <br />

       
        <div className=' relative w-12/12 flex'>
          <input
            type='text'
            name='userDocument'
            value={userDocument}
            onChange={handleInputChange}
            id='form-subscribe-Subscribe'
            className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
            placeholder='Solo números'
          />
          <button
            onClick={handleVerifyDocument}
            className='flex-shrink-0 px-4 py-2 w-1/12 text-gray-500 font-semibold text-white bg-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'
            type='submit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
        
        
        
        {
          error &&
          <div className='my-6'>
            <InputErrorAlert
              type='warning'
              title='Algo salió mal :('
              msg={error}
            />
          </div>
        }

        <div className='block w-full mt-10'>
          <ButtonGeneral
            fn={handleSubmit}
            title='Agendar'
            text='white'
            bg='blue'
            disabled={!date}
          />
        </div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className='invisible absolute__class'
            open={showModalDate}
            disablePast={true}
            onChange={() => console.log('change')}
            onClose={() => {
              setShowModalDate(false);
            }}
            cancelLabel='Cancelar'
            okLabel='Confirmar'
            onAccept={onChangeDate}
            value={date}
          />
        </MuiPickersUtilsProvider>
      </div>
    </section>
  );
};
