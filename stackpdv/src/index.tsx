import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './Services/serviceWorkerRegistration';
import GlobalStyle from './Styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './Services/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Venda from './Pages/Venda';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/venda' element={<Venda />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

