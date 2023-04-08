import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Message from './components/Message/Message';
import Checkit from './components/Checkit/Checkit';
import Calender from './components/Calender/Calender';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/user',
        element: <Users />
      },
      {
        path: '/message',
        element: <Message />
      },
      {
        path: '/checkit',
        element: <Checkit />
      },
      {
        path: '/calendar',
        element: <Calender />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
