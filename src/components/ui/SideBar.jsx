import React, { useEffect, useState } from 'react';
import { ItemSideBar } from './ItemSideBar';
import logo from '../../public/assests/logo.png'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleMenu = () => {
    console.log(openMenu);
    setOpenMenu(!openMenu);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <>
      <div
        id='sideBar'
        className='flex flex-col min-h-screen text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 side__bar z-1'>
        <div className='flex-shrink-0 py-4 flex flex-row items-center justify-center bg-white text-white'>
          <img src={logo} className='img__logo' alt=""/>
        </div>

        <nav className='flex-grow md:block pb-4 md:pb-0 md:overflow-y-auto '>
          <ItemSideBar
            title='Perfil'
            to='/home/perfil'
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />

          <ItemSideBar
            title='Pacientes'
            to='/home/pacientes'
            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
          />

          <ItemSideBar
            title='Citas'
            to='/home/turnos'
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />

          <ItemSideBar
            title='Cerrar sesión'
            to='/ingreso'
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            fn={ handleLogout }
          />

        </nav>
      </div>
    </>
  );
};
