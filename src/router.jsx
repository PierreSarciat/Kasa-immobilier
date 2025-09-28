import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
