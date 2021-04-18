import React, { useEffect, useState } from 'react';
import { ListHourItem } from './ListHourItem';

export const ListHour = ({ date = null, fn = () => {} }) => {
  const [hoursDay, setHoursDay] = useState();

  const hoursNormal = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];
  const hoursSaturday = ['09', '10', '11', '12'];

  useEffect(() => {
    isSaturday(date);
  }, [date]);

  const isSaturday = (date) => {
    if (new Date(date).getDay() === 6) {
      setHoursDay(hoursSaturday);
      return;
    }
    setHoursDay(hoursNormal);
    return false;
  };

  if (!date) {
    return null;
  }

  return (
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 md:grid-rows-6'>
      {hoursDay.map((hour) => (
        <li key={hour} onClick={() => fn(hour)} className='border-gray-400 flex flex-row p-2 mb-2 text-center animate__animated animate__fadeIn'>
          <ListHourItem hour={`${hour}:00`} />
        </li>
      ))}
    </ul>
  );
};
