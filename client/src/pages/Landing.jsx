import React from 'react';
import Login from '../components/Login';
import welcome from '../images/welcome.png'
import rightman from '../images/rightman.png'
const Landing = () => {
  return (
  <div className="landing">
    <img src={welcome} className='welcome'/>
    <Login/>
    <img src={rightman} className='rightman'/>
  </div>
  )
};

export default Landing;
