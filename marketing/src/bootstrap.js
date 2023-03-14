import React from 'react';
import ReacDom from 'react-dom';
import App from './App';

export const mount = (el) => {
  ReacDom.render(<App />, el);
};

if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot){
    mount(devRoot);
  }
}