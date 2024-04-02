import React from 'react';
import ReactDOM from 'react-dom/client';
import document from 'global/document';
import {Provider} from 'react-redux';
import App from './app';
import store from "../src/Store/Store"


const Root = () => (
  <Provider store={store}>
    < App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Root />);
