import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import Notfounds from '../pages/Notfounds';
import Layaout from '../layouts/Layaout';
import Home from '../pages/Home';
import Dashboardlayot from '../layouts/dashboard/Dashboardlayot';
import Guestlayout from '../layouts/Guestlayout';
import Userinfo from '../publieur/Userinfo';
import Addbook from '../publieur/Addbook';



export  const routes = createBrowserRouter([
    {
        element:<Layaout/>,
        children:[
            {
                path: '/',
                element:  <Home/> ,
              },
             
             
              
              {
                path: '*',
                element: <Notfounds/>
                ,
              },
        ]
    },
    {
      element :<Guestlayout/>,
      children :[ 
        {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
    ]
    },
    {
      element :<Dashboardlayot/>,
      children :[
        {
          path: '/user',
          element: <Userinfo/>,
        },
        {
          path: '/add-book',
          element: <Addbook/>,
        },
      ]
    },
  
]);
