import React from 'react';
import {ReactDOM, createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import HomeIndex from './Pages/LandPage/HomeIndex';
import { AppProvider } from './Context/Appcontext';
import LoginPage from './Pages/Autenticacao/loginPage';

import './index.css'
const root = createRoot(document.getElementById('root'));

const appRouter= createBrowserRouter([
  {
    path: '/',
    element: <HomeIndex />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  
])
root.render(
  <React.StrictMode>
   <AppProvider>
      <RouterProvider router={appRouter} />
   </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
