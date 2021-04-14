import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser } from '../../actions/profile';
import { setCapital } from '../../helpers/setCapitalizedString';
import { useForm } from '../../hooks/useForm';
import { Loading } from '../ui/Loading';

export const ProfileScreen = () => {
  const { uid } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const { loading, email, name } = profile;

  const initialValues = {
    userName: name,
    userEmail: email,
  };

  const [formValues, handleInputChange] = useForm(initialValues);

  const { userName, userEmail } = formValues;

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser(uid));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <section className='h-screen bg-gray-100 bg-opacity-50 py-32'>
        <form className='container max-w-2xl mx-auto shadow-md md:w-3/4'>
          <div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5'>
            <div className='max-w-sm mx-auto md:w-full md:mx-0'>
              <div className='inline-flex items-center space-x-4'>
                <a href='#' className='block relative'>
                  <img
                    alt='profil'
                    src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                    className='mx-auto object-cover rounded-full h-16 w-16 '
                  />
                </a>
                <h1 className='text-gray-600'>{userName}</h1>
              </div>
            </div>
          </div>
          <div className='space-y-6 bg-white'>
            <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
              <h2 className='max-w-sm mx-auto md:w-1/3'>Correo electrónico</h2>
              <div className='max-w-sm mx-auto md:w-2/3'>
                <div className=' relative '>
                  <input
                    name='userEmail'
                    type='text'
                    id='user-info-name'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='E-mail'
                    value={ userEmail }
                    onChange={ (e) => handleInputChange(e) }
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
              <h2 className='max-w-sm mx-auto md:w-1/3'>
                Información personal
              </h2>
              <div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
                <div>
                  <div className=' relative '>
                    <input
                      type='text'
                      id='user-info-name'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Nombre'
                      name='userName'
                      value={ userName }
                      onChange={ handleInputChange }
                    />
                  </div>
                </div>
                <div>
                  <div className=' relative '>
                    <input
                      type='text'
                      id='user-info-phone'
                      className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                      placeholder='Phone number'
                      onChange={ handleInputChange }
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className='items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
              <h2 className='max-w-sm mx-auto md:w-4/12'>Cambiar contraseña</h2>
              <div className='w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex'>
                <div className=' relative '>
                  <input
                    type='text'
                    id='user-info-password'
                    className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Nueva constraseña'
                    onChange={ handleInputChange }
                  />
                </div>
              </div>
              <div className='text-center md:w-3/12 md:pl-6'>
                <button
                  type='button'
                  className='py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                  Change
                </button>
              </div>
            </div>
            <hr />
            <div className='w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3'>
              <button
                type='submit'
                className='py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
