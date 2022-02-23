import React, { Fragment } from 'react';
import {Row, Col} from 'react-bootstrap'
import Navbar from '../components/Navbar';
import questions from '../images/QUESTIONS.png'

const Questions = () => {
  return <div className='questions'>
    <Navbar/>
      <img src={questions} className='questions-img'/>
      <div className="login">
             
             <Fragment>
            <h3 className="quiz-profile">Hi, </h3>
             <h1 className="login-profile">TEAM NAME</h1>
           <p className='task'>Here is your task</p>
             <button type="submit">QUIZ</button>
          
           </Fragment>
           
           
         </div>
  </div>;
};

export default Questions;
