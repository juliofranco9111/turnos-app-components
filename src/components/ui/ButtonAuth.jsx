import React from 'react';

export const ButtonAuth = ({
  title = '',
  type = 'submit',
  fn = null,
  loading = false,
  disabled = false
}) => {
  return (
    <>
      {!loading ? (
        <button
        disabled={ disabled }
          onClick={fn}
          type={type}
          className='group relative w-full flex justify-center py-2 px-4 border 
                            border-transparent text-sm font-medium rounded-md 
                            text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          <span className='animate__animated animate__fadeInDown animate__faster absolute left-0 inset-y-0 flex items-center pl-3'>
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
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          </span>
          <span className='animate__animated animate__fadeInDown animate__faster'>
            {title}
          </span>
        </button>
      ) : (
        <button
          disabled
          className='disabled group relative w-full flex justify-center py-2 px-4 border 
                            border-transparent text-sm font-medium rounded-md 
                            text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          <span className='animate__animated animate__fadeInUp animate__faster absolute left-0 inset-y-0 flex items-center pl-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 animate-spin'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
          </span>
          <span className='animate__animated animate__fadeInUp animate__faster'>
            Cargando ...
          </span>
        </button>
      )}
    </>
  );
};
