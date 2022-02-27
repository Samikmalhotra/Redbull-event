import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(null);
  const [customerror, setError] = useState(false);
  const [show, setShow] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("redbullToken");
    if (token) {
      navigate("/questions");
    }
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(
        "https://redbullapi.ccstiet.com/login/",
        body
      );
      setRes(res);

      if (res.error) {
        console.log(res.error);
      }
    } catch (error) {
      setError(true);
      setShow(true);
    }

    console.log(res.error);

    

    if (res && res.data) {
      const teamObj = {
        team: res.data.team,
        ccs: res.data.eliminated,
      };
  
      const finTeamObj = JSON.stringify(teamObj);
      localStorage.setItem("redbullToken", res.data.token);
      localStorage.setItem("teamName", finTeamObj);
    }

    if (res && res.data.token) {
      navigate("/questions");
    }
  };

  return (
    <div className="login">
      <Fragment>
        <h1 className="login-profile">PROFILE</h1>
        <form onSubmit={submitHandler}>
          <p>EMAIL ID</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p>PASSWORD</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">LOGIN</button>
          <p>
            New <a href="/register">Register</a>
          </p>
        </form>
        {customerror ? (
          <ToastContainer className="p-3" position="bottom-start" autohide> 
            <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header closeButton={false}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Red Rush</strong>
                <small>HackTU</small>
              </Toast.Header>
              <Toast.Body>Invalid credentials</Toast.Body>
            </Toast>
          </ToastContainer>
        ) : (
          ""
        )}
      </Fragment>
    </div>
  );
};

export default Login;
