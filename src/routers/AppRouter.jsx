import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRouter';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Loading } from '../components/ui/Loading';
import { startChecking } from '../actions/auth';
import { HomeScreen } from '../components/pages/HomeScreen';
import { ProfileScreen } from '../components/pages/ProfileScreen';
import { SideBar } from '../components/ui/SideBar';
import { NavBarMobile } from '../components/ui/NavBarMobile';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { uid, checking } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path='/ingreso'
            component={LoginScreen}
            isLoggedIn={!!uid}
          />
          <PublicRoute
            path='/registro/:type'
            component={RegisterScreen}
            isLoggedIn={!!uid}
          />

          <>
            <SideBar />
            <NavBarMobile />

            <PrivateRoute
              exact
              path='/home'
              component={HomeScreen}
              isLoggedIn={!!uid}
            />

            <PrivateRoute
              exact
              path='/home/perfil'
              component={ProfileScreen}
              isLoggedIn={!!uid}
            />
          </>

          <Redirect to='/ingreso' />
        </Switch>
      </div>
    </Router>
  );
};
