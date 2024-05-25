import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter as Router, Routes } from 'react-router-dom'
import APOD from './Pages/APOD'
import WildFire from './Pages/WildFire';
import MRP from './Pages/MRP';
import HomePage from './Pages/HomePage';
import MainLayout from './layout/MainLayout';


const router = createBrowserRouter(

  createRoutesFromElements( 
    <Route path='/' element={<MainLayout />} > 
      <Route path='/APOD' element={<APOD/>}/>
      <Route path='/wildfire' element={<WildFire/>} />
      <Route path='/MRP' element={<MRP/>} />
      <Route index element={< HomePage/>}/>
    </Route>
  
  )

);

const App = () => {
  
  return <RouterProvider router ={ router } />;

  /*return(

    <Router>

      <Routes>

        <Route path="/" element={<APOD/>}/>
        <Route path='/wildfire' element={<WildFire/>} />

      </Routes>

    </Router>

  );*/
    
  
}

export default App