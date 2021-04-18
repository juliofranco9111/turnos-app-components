import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser } from '../../actions/user';
import { SessionReq } from '../SessionReq';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  if( uid ){
    dispatch( getProfileUser(uid) )
  }

  return (
    <div className='flex'>
      <SessionReq />
    </div>
  );
};
