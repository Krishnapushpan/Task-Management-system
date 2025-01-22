import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home/>}/>
))
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App