import React from 'react';
import Login from '../components/Login';
import welcome from '../images/welcome.png'
const Landing = () => {
  return (
  <div class="landing">
    <img src={welcome} className='welcome'/>
    <Login/>
  </div>
  )
};

export default Landing;
