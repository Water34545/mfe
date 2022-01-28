import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MacketingApp from './components/MacketingApp';
import Header from './components/Header';

export default () => {
  return <BrowserRouter>
    <Header/>
    <MacketingApp/>
  </BrowserRouter>
}