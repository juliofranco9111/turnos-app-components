import React, { useState } from 'react';

export const ListHourItem = ({ hour }) => {

  return (
    <button className='shadow border select-none cursor-pointer bg-white outline-none focus:outline-none hover:bg-gray-200 dark:bg-gray-800 rounded-md flex flex-1 items-center p-2'>
      <div className='font-medium dark:text-white text-center'>{hour}</div>
    </button>
  );
};
