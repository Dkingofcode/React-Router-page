import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className='section'>
    <h1>Dashboard</h1>
    <h4>Hello, {user?.name}</h4>
    </div>
  )
}

export default Dashboard;