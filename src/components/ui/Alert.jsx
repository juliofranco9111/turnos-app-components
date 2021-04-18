import React from 'react';

export const Alert = ({ type, text, loading = true }) => {
  const loader = (
    <>
      <svg
        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'>
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
      <p className='flex-grow text-md'>{text} </p>
    </>
  );

  switch (type) {
    case 'info':
      return (
        <div className='flex items-center justify-between shadow-md bg-blue-500 text-white py-2 px-4 my-2 animate__animated animate__fadeIn'>
          {loading ? (
            loader
          ) : (
            <>
              <svg
                className='fill-current flex-shrink-0 text-blue-700 w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <path d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' />
              </svg>
              <p className='flex-grow text-md'>{text} </p>
            </>
          )}
        </div>
      );

    case 'warning':
      return (
        <div class='flex items-center justify-between shadow-md bg-yellow-500 text-white py-2 px-4 my-2 animate__animated animate__fadeIn'>
          {loading ? (
            loader
          ) : (
            <>
              <svg
                class='fill-current flex-shrink-0 text-yellow-700 w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <path d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z' />
              </svg>
             <p className='flex-grow text-md'>{text} </p>
            </>
          )}
        </div>
      );
    case 'success':
      return (
        <div className='flex items-center justify-between shadow-md bg-green-500 text-white py-2 px-4 my-2 animate__animated animate__fadeIn'>
          {loading ? (
            loader
          ) : (
            <>
              <svg
                className='fill-current flex-shrink-0 text-green-100 w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' />
              </svg>
              <p className='flex-grow text-md'>{text} </p>
            </>
          )}
        </div>
      );
    case 'danger':
      return (
        <div className='flex items-center justify-between shadow-md bg-red-500 text-white py-2 px-4 my-2 animate__animated animate__fadeIn'>
          {loading ? (
            loader
          ) : (
            <>
              <svg
                className='fill-current flex-shrink-0 text-red-700 w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'>
                <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z' />
              </svg>
              <p className='flex-grow text-md'>{text} </p>
            </>
          )}
        </div>
      );

    default:
      return <div></div>;
  }
};
