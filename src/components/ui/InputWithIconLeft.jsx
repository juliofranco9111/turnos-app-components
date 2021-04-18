import React from 'react';

export const InputWithIconLeft = ({ value, name, change, icon, fn = () => {} }) => {
  return (
    <div className='my-2 relative'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
        <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
          <path
            d={icon}
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </svg>
      </span>

      <input
        onKeyDown={fn}
        value={value}
        onChange={ change }
        name={ name }
        type='text'
        className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
        placeholder='Search'
      />
    </div>
  );
};
