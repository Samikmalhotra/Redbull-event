import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async() => {
    const body = {
      "email": email,
      "password": password
    }
    const res = await axios.post('http://9e05-2401-4900-1719-2702-d1b1-bba3-bab8-e0bd.ngrok.io/login', body)
  }

  return (
    <div className="login">
      <h1 className="login-profile">PROFILE</h1>
      <form onSubmit={submitHandler}>
        <p>EMAIL ID</p>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <p>PASSWORD</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
