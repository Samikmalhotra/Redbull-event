import React from 'react';

const Login = () => {
  return <div class="login">
    <h1 className='login-profile'>PROFILE</h1>
    <form>
    <p>TEAM NAME</p>
    <input type="text"></input>
    <p>EMAIL ID</p>
    <input type="email"></input>
    <p>PASSWORD</p>
    <input type="password"></input>
    <button type='submit'>LOGIN</button>
    </form>
  </div>;
};

export default Login;
