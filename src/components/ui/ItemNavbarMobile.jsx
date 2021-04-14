import React from 'react'
import { Link } from 'react-router-dom'

export const ItemNavbarMobile = ({ d = '', to = '' }) => {
    return (
        <div className='flex-shrink-0 flex flex-row items-center justify-center'>
              <Link
                to={ to }
                className='block mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d={ d } 
                  />
                </svg>
              </Link>
            </div>
    )
}
