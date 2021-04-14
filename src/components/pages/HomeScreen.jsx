import React from 'react';
import { NavBarMobile } from '../ui/NavBarMobile';
import { SideBar } from '../ui/SideBar';
import { SessionReqScreen } from '../SessionRequestScreen';

export const HomeScreen = () => {
  

  return (
    <div className="flex">
      <SessionReqScreen />
      {/* <SideBar /> 
       <NavBarMobile /> */}
    </div>
  );
};
