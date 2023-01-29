import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import PrivateRoutes from './PrivateRoute';
import Update from './Update';
import Todos from './Todos';
import Chatapp from './Chatapp';
import Videoapp from './Videoapp';
import Freqs from './Freqs';




const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={  <Home /> }></Route>
        
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/todos/:id' element={ <PrivateRoutes> <Todos /> </PrivateRoutes>}></Route>
        <Route path='/todos/update/:id' element={<Update />}></Route>
        <Route path='/chatapp' element={ <PrivateRoutes>  <Chatapp /> </PrivateRoutes> }></Route>
        <Route path='/videoapp' element={ <PrivateRoutes> <Videoapp /></PrivateRoutes> }></Route>
        <Route path='/freqs' element={<Freqs />}></Route>
    </Routes>
  )
}

export default AppRoutes