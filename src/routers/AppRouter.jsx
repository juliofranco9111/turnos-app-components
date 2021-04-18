import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

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
import { HeaderNav } from '../components/ui/HeaderNav';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { uid, checking } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <Loading />;
  } else {
    return (
      <Router>
        <div>
          <Switch>
          
            {/* <PublicRoute
              path='/ingreso'
              component={LoginScreen}
              isLoggedIn={!!uid}
            />
            <PublicRoute
              path='/registro/:type'
              component={RegisterScreen}
              isLoggedIn={!!uid}
            /> */}
            <Route path="/ingreso">
            <LoginScreen />
          </Route>
          <Route path="/registro/:type">
            <RegisterScreen />
          </Route>
          <>
              <SideBar />
              <HeaderNav />
              <NavBarMobile />

              <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/home/perfil">
            <ProfileScreen />
          </Route>

              {/* <PrivateRoute
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
              /> */}
            </>

            <Redirect to='/ingreso' />
          </Switch>
        </div>
      </Router>
    );
  }
};
