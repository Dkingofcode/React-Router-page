import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';


const Home = () => {
  return (
   <>
    <StyledNavbar /> 
    <div>
     <Outlet />
    </div>

    </>
  );
};

export default Home;