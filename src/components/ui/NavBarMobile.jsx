import React from 'react';
import { ItemNavbarMobile } from './ItemNavbarMobile';

export const NavBarMobile = () => {
  return (
    <div className='navbar__mobile bg-white w-full'>
      <nav>
        <ul className='flex justify-between'>
          <li className='w-full hover:bg-gray-200'>
            <ItemNavbarMobile
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
              to='/links'
            />
          </li>
          <li className='w-full hover:bg-gray-200'>
            <ItemNavbarMobile
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              to='/links'
            />
          </li>

          <li className='w-full hover:bg-gray-200'>
            <ItemNavbarMobile
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              to='/links'
            />
          </li>

          <li className='w-full hover:bg-gray-200'>
            <ItemNavbarMobile d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
          </li>
        </ul>
      </nav>
    </div>
  );
};
