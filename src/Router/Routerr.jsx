import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import Navs from '../component/Nav';
import Tickets from '../pages/Tickets';
import Events from '../pages/Events';
import Home from '../pages/Home';

function Routerr() {
  const location = useLocation();


  return (
    <>
   <div className=''>
   {/* <Navs/> */}
    <AnimatePresence mode="wait">
       
          
          
          <Routes location={location}
                key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Tickets" element={<Tickets />} />
        </Routes>
        

    </AnimatePresence>
   </div>
     
    
    </>
  )
}

export default Routerr
