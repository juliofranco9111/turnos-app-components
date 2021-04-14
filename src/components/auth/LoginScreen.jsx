import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';
import { ButtonAuth } from '../ui/ButtonAuth';
import { InputWithLabel } from '../ui/InputWithLabel';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [routeUser, setRouteType] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    if (type === 'profesional') {
      setRouteType(false);
    }
  }, [type]);

  const initialValues = {
    email: 'test@test.com',
    password: '123456',
  };
  const [values, handleInputChange] = useForm(initialValues);

  const { email, password } = values;

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(startLogin(email, password));
  };

  return (
    <div>
      <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='text-center text-3xl font-extrabold text-gray-900'>
              Ingresa a tu cuenta
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <InputWithLabel
                  type='email'
                  name='email'
                  placeholder='Correo electrónico'
                  value={email}
                  change={handleInputChange}
                />
              </div>
              <div>
                <InputWithLabel
                  type='password'
                  name='password'
                  placeholder='Contraseña'
                  value={password}
                  change={handleInputChange}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember_me'
                  name='remember_me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember_me'
                  className='ml-2 block text-sm text-gray-900'>
                  Recuérdame
                </label>
              </div>

              <div className='text-sm'>
                <Link
                  to='/registro/usuario'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Crear una cuenta
                </Link>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <ButtonAuth
                title='Ingresar'
                loading={loading}
                fn={handleSubmit}
                disabled={!email || !password}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
