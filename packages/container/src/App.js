import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MacketingLazy = lazy(() => import('./components/MacketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignin, setIsSignin] = useState(false);

  return <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header isSignin={isSignin} onSignOut={() => setIsSignin(false)}/>
      <Suspense fallback={<Progress/>}>
        <Switch>
          <Route path="/auth">
            <AuthLazy onSignIn={() => setIsSignin(true)}/>
          </Route>
          <Route path="/">
            <MacketingLazy/>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  </StylesProvider>
}