import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from 'react-router-dom';
import Home from './pages/Home';
import Addtask from './pages/AddTask';
const App = () => {
const router = createBrowserRouter(createRoutesFromElements(<>
  <Route path="/" element={<Home/>}/>
  <Route path="/add-task" element={<Addtask/>}/>
  </>
))
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App