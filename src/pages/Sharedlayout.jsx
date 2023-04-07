import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import Navbar from '../components/Navbar';

const Sharedlayout = () => {
  return (
    <>
    <Navbar />
    <div>
      <Outlet />  
    </div>
    </>

    
  );
};

export default Sharedlayout;