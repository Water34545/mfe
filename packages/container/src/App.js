import React, {lazy, Suspense, useState, useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {createBrowserHistory} from "history";
import Header from './components/Header';
import Progress from './components/Progress';

const MacketingLazy = lazy(() => import('./components/MacketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    if (isSignin) {
      history.push("/dashboard");
    }
  }, [isSignin])

  return <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Header isSignin={isSignin} onSignOut={() => setIsSignin(false)}/>
      <Suspense fallback={<Progress/>}>
        <Switch>
          <Route path="/auth">
            <AuthLazy onSignIn={() => setIsSignin(true)}/>
          </Route>
          <Route path="/dashboard">
            {!isSignin && <Redirect to="/"/>}
            <DashboardLazy/>
          </Route>
          <Route path="/">
            <MacketingLazy/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </StylesProvider>
}