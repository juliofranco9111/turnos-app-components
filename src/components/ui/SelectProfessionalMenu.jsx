import React, { useEffect, useState } from 'react';
import { data } from '../../hooks/useFetch';

export const SelectProfessionalMenu = ({ changeProfessional }) => {
  const users = data;

  const [showList, setShowList] = useState(false);
  const [activeUser, setActiveUser] = useState(users[0]);
  useEffect(() => {
    changeProfessional(users[0]);
  }, []);

  const handleList = () => {
    setShowList(!showList);
  };
  const handleSetActive = (user) => {
    setActiveUser(user);
    changeProfessional(user);
    handleList();
  };

  return (
    <div className='grid grid-flow-col grid-rows-1 gap-4 my-2'>
      <div>
        <div className='mt-1 relative'>
          <button
            onClick={handleList}
            type='button'
            className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            aria-haspopup='listbox'
            aria-expanded='true'
            aria-labelledby='listbox-label'>
            <span className='flex items-center'>
              <img
                src={activeUser.avatar}
                alt=''
                className='flex-shrink-0 h-6 w-6 rounded-full'
              />
              <span className='ml-3 block truncate'>
                {activeUser.first_name} {activeUser.last_name}
              </span>
            </span>
            <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </button>

          {showList && (
            <ul
              className='z-1 absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
              role='listbox'
              aria-labelledby='listbox-label'
              aria-activedescendant='listbox-option-3'>
              {users &&
                users.map((user) => {
                  return (
                    <li
                      onClick={() => handleSetActive(user)}
                      key={user.id}
                      className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-500 hover:text-white'
                      id='listbox-option-0'
                      role='option'>
                      <div className='flex items-center'>
                        <img
                          src={user.avatar}
                          alt=''
                          className='flex-shrink-0 h-6 w-6 rounded-full'
                        />
                        <span className='font-normal ml-3 block truncate'>
                          {user.first_name} {user.last_name}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
