import axios from 'axios';
import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import questions from '../images/QUESTIONS.png'

const Questions = () => {

  const navigate = useNavigate()

  const [link,setLink] = useState(null)

  useEffect(async() => {
    
    const resp = await axios.get('https://redbullapi.ccstiet.com/link/')
    setLink(resp.data.link)
  }, [setLink])

  const teamDet = localStorage.getItem('teamName')
  const finTeamDet = JSON.parse(teamDet)
  
  const teamName = finTeamDet && finTeamDet.team
  const redbullToken = localStorage.getItem('redbullToken')
  const eliminated = finTeamDet && finTeamDet.ccs

  if(!redbullToken){
    navigate('/')
  }


  return <div className='questions'>
    <Navbar/>
      <img src={questions} className='questions-img'/>
      <div className="login">
             
             <Fragment>
            <h3 className="quiz-profile">Hi, </h3>
             <h1 className="login-profile">{teamName}</h1>
             {eliminated && eliminated === 'yes'? 
             <Fragment>
              <p className='task'>We're sorry.</p>
              <p className='task'>Your team has been</p>
              <h1 className="login-profile">ELIMINATED</h1>
              </Fragment>
             :
             <Fragment>
             <p className='task'>Here is your task</p>
             <a href={link}><button>QUIZ</button></a>
             </Fragment>
             }
           
          
           </Fragment>
           
           
         </div>
  </div>;
};

export default Questions;
