import React from 'react';
import welcome from '../images/Group 224.png'
import rightman from '../images/rightman.png'
import RegisterForm from '../components/RegisterForm';
const Register = () => {
  return (
  <div className="landing">
    <img src={welcome} className='welcome'/>
    <RegisterForm/>
    <img src={rightman} className='rightman'/>
  </div>
  )
};

export default Register;
