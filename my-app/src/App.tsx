import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gini from './components/gini/Gini';
import './components/gini/Gini.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Gini/>,
    errorElement: <div>hi! you reached to page that not found</div>
  }
]);

function App() {
  return (<RouterProvider router={router}></RouterProvider>);
}

export default App;
