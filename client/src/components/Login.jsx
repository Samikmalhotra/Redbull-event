import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [res, setRes] = useState(null)

  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault()

    const body = {
      "email": email,
      "password": password
    }
    const res = await axios.post('https://redbullapi.ccstiet.com/login/', body)
    setRes(res)

    if(res && res.data.token){
      navigate('/questions')
    }
  }

 

  return (
    <div className="login">
             
        <Fragment>
        <h1 className="login-profile">PROFILE</h1>
      <form onSubmit={submitHandler}>
        <p>EMAIL ID</p>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <p>PASSWORD</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">LOGIN</button>
      </form>
      </Fragment>
      
      
    </div>
  );
};

export default Login;
