import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import { ListHour } from './ListHour';
import { Alert } from './Alert';

import {
  MONTHS,
  WEEKDAYS_LONG,
  WEEKDAYS_SHORT,
} from '../../helpers/datePickerLocale';
import { useDispatch, useSelector } from 'react-redux';
import {
  startVerifyDate,
  clearVerify,
  getProfessionals,
} from '../../actions/appointment';

export const Datepicker = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const { verify } = useSelector((state) => state.appointment);

  useEffect(() => {
    dispatch(getProfessionals());
  }, []);
  const { loading, msg, ok } = verify;

  const handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      return;
    }

    if (day.getTime() > new Date().getTime()) {
      dispatch(clearVerify());
      setDate(day);      
    } else {
      return
    }
    /* fn(day); */
  };

  const setHour = (hour) => {
    const newDate = new Date(date);
    newDate.setHours(hour);
    setDate(newDate);
    dispatch(startVerifyDate(newDate));
  };

  return (
    <>
      <div className='grid md:grid-cols-2 gap-2'>
        <DayPicker
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          onDayClick={handleDayClick}
          firstDayOfWeek={1}
          selectedDays={date}
          disabledDays={{ daysOfWeek: [0, new Date().getDate()] }}
        />

        <div id='container__hour' className='grid px-3 mx-auto w-full'>
          <ListHour date={date} fn={setHour} />
        </div>
      </div>

      <div className='block'>
        {loading && msg && (
          <Alert type='info' text='Comprobando...' loading={true} />
        )}

        {ok && msg && <Alert type='success' loading={false} text={msg} />}

        {!ok && msg && <Alert type='danger' loading={false} text={msg} />}
      </div>
    </>
  );
};
