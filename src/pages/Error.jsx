import React from 'react'
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className='section'>   
    <h2>Error 404</h2>
    <h4>page not found</h4>
    <Link to='/'>back home</Link>
    </div>
  );
};

export default Error;