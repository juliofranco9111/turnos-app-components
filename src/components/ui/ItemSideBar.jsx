import React from 'react';
import { Link } from 'react-router-dom';

export const ItemSideBar = ({ d = '', to = '', title = '', fn = null }) => {
  return (
    <div className='sidebar__item py-6 bg-transparent hover:bg-gray-200'>
      <Link
        to={to}
        onClick={ fn }
        className='py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
        <div className='flex mx-4'>
          <div className='sidebar__icon w-2/12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={d}
              />
            </svg>
          </div>

          <div className='sidebar__text w-10/12'>{title}</div>
        </div>
       
      </Link>

      
    </div>
  );
};


