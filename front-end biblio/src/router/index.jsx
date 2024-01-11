import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import User from '../pages/user';
import Notfounds from '../pages/Notfounds';
import Layaout from '../layouts/Layaout';
import Home from '../pages/Home';


export  const routes = createBrowserRouter([
    {
        element:<Layaout/>,
        children:[
            {
                path: '/',
                element:  <Home/> ,
              },
              {
                path: '/login',
                element: <Login/>,
              },
              {
                path: '/register',
                element: <Register/>,
              },
              {
                path: '/user',
                element: <User/>,
              },
              {
                path: '*',
                element: <Notfounds/>
                ,
              },
        ]
    },
  
]);
