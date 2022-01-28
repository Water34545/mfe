import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import MacketingApp from './components/MacketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <Header/>
      <MacketingApp/>
    </StylesProvider>
  </BrowserRouter>
}