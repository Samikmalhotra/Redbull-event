import React from 'react';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import welcome from '../images/Group 224.png'
import rightman from '../images/rightman.png'


const Landing = () => {
  return (
  <div className="landing">
    <Navbar/>
    <img src={welcome} className='welcome'/>
    <Login/>
    <img src={rightman} className='rightman'/>
  </div>
  )
};

export default Landing;
