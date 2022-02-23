import React from 'react';
import welcome from '../images/Group 224.png'
import rightman from '../images/rightman.png'
import RegisterForm from '../components/RegisterForm';
import Navbar from '../components/Navbar';
const Register = () => {
  return (
  <div className="landing">
    <Navbar/>
    <img src={welcome} className='welcome'/>
    <RegisterForm/>
    <img src={rightman} className='rightman'/>
  </div>
  )
};

export default Register;
