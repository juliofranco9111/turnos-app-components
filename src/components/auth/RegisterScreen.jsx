import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonAuth } from '../ui/ButtonAuth';
import { useForm } from '../../hooks/useForm';
import { InputWithLabel } from '../ui/InputWithLabel';
import { InputErrorAlert } from '../ui/InputErrorAlert';
import { Link, useParams } from 'react-router-dom';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {
  const [routeUser, setRouteType] = useState(true);

  const { type } = useParams();

  

  useEffect(() => {
    if( type === 'profesional' ){
      setRouteType( false )
    }
  }, [type])

  console.log(type);

  const dispatch = useDispatch();

  const initialValues = {
    fName: 'julio',
    lName: 'cesar',
    email: 'test@test.com',
    specialty: 'gineco',
    password: '123456',
    rePassword: '123456',
  };

  const [errors, setErrors] = useState(false);

  const [loading, setLoading] = useState(false);

  const [values, handleInputChange] = useForm(initialValues);

  const { fName, lName, email, specialty, password, rePassword } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

   console.log(errors);

   const formData = {
      ...values,
      role: type === 'profesional' ? 'PROFESSIONAL_ROLE' : 'USER_ROLE'
    }

    console.log(formData);

    dispatch( startRegister(formData) )
    setLoading(false);
  };

  return (
    <div className='animate__animated animate__fadeIn'>
      <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='text-center text-3xl font-extrabold text-gray-900'>
              Crear una cuenta
            </h2>
            {!routeUser ? (
              <p className='mt-2 text-center text-sm text-gray-600'>
                <Link
                  to='/registro/usuario'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Registrarme como usuario
                </Link>
              </p>
            ) : (
              <p className='mt-2 text-center text-sm text-gray-600'>
                <Link
                  to='/registro/profesional'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Registrarme como profesional
                </Link>
              </p>
            )}
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              {errors && (
                <div className='animate__animated animate__fadeIn animate__faster'>
                  <InputErrorAlert />
                </div>
              )}
              <div>
                <InputWithLabel
                  type='text'
                  name='fName'
                  placeholder='Nombre'
                  value={fName}
                  change={handleInputChange}
                />
              </div>

              <div>
                <InputWithLabel
                  type='text'
                  name='lName'
                  placeholder='Apellido'
                  value={lName}
                  change={handleInputChange}
                />
              </div>
              {!routeUser && (
                <div>
                  <InputWithLabel
                    type='text'
                    name='specialty'
                    placeholder='Especialidad'
                    value={specialty}
                    change={handleInputChange}
                  />
                </div>
              )}

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
              <div>
                <InputWithLabel
                  type='password'
                  name='rePassword'
                  placeholder='Repetir constraseña'
                  value={rePassword}
                  change={handleInputChange}
                />
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center'></div>

              <div className='text-sm'>
                Ya tengo una cuenta
                <Link
                  to='/ingreso'
                  className='font-medium text-indigo-600 hover:text-indigo-500 ml-1'>
                  Ingresar
                </Link>
              </div>
            </div>

            <div>
              <ButtonAuth
                fn={handleSubmit}
                title='Registrarse'
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
