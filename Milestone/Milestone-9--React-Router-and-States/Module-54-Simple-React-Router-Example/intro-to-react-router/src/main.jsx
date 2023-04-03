import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import First from './components/First/First';
import Frients from './components/Frients/Frients';
import FriendDetail from './components/FriendDetail';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <First />
      },
       {
        path: 'about',
        element: <About />
       },
       {
        path: 'friends',
        element: <Frients />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
       },
       {
        path: '/friend/:friendId',
        element: <FriendDetail />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
       },
       {
        path: '/posts',
        element: <Posts />,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
       },
       {
        path: '/posts/:postsId',
        element: <PostDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`)
       },
       {
        path: 'contact',
        element: <Contact />
       }
    ]
  },
  {
    path: '*',
    element: <h1>NotFound</h1>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
