import React from 'react';


export const SelectProfessionalMenu = ({ avatar, name }) => {
  
  
  return (
    <div className='grid grid-flow-col grid-rows-1 gap-4 my-2'>
      <div>
        <div className='mt-1 relative'>
          <button
            disabled
            type='button'
            className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            aria-haspopup='listbox'
            aria-expanded='true'
            aria-labelledby='listbox-label'>
            <span className='flex items-center'>
              <img
                src={avatar}
                alt=''
                className='flex-shrink-0 h-6 w-6 rounded-full'
              />
              <span className='ml-3 block truncate'>{name}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
