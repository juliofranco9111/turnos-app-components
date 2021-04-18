import React from 'react';

export const InputErrorAlert = ({ title = '', msg = '', type = '' }) => {
  if (type === 'error') {
    return (
      <div
        className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate__animated animate__fadeIn'
        role='alert'>
        <strong className='font-bold'>{ title }</strong>
        <br/>
        <span className='block sm:inline'>
          { msg }
        </span>
      </div>
    );
  }

  if (type === 'info') {
    return (
      <div
        className='bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative animate__animated animate__fadeIn'
        role='alert'>
        <strong className='font-bold'>{ title }</strong>
        <span className='block sm:inline'>
          { msg }
        </span>
      </div>
    );
  }

  if (type === 'warning') {
    return (
      <div
        className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative animate__animated animate__fadeIn'
        role='alert'>
        <h1><strong className='font-bold'>{ title }</strong></h1>
        <span className='block sm:inline'>
          { msg }
        </span>
      </div>
    );
  }
};
