import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [teamName, setTeamName] = useState("");
  const [teamLeaderEmail, setTeamLeaderEmail] = useState("");
  const [memberone, setMemberone] = useState("");
  const [membertwo, setMembertwo] = useState("");
  const [memberthree, setMemberthree] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(null)

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      teamName: teamName,
      teamLeader: { email: teamLeaderEmail },
      member1: { email: memberone },
      member2: { email: membertwo },
      member3: { email: memberthree },
      password: password,
    };

    const res = await axios.post(
      "https://redbullapi.ccstiet.com/register/",
      body
    );

    setRes(res)


  };

  

  return (
    <div className="register">
      {res && res.data.success ? <p className="task">Your team has been successfully registered</p>:<Fragment>
        <h1 className="login-profile">REGISTER</h1>
      <form onSubmit={submitHandler}>
        <Row>
          <Col xs={6}>
            <p>TEAM NAME</p>
            <input
              type="text"
              onChange={(e) => setTeamName(e.target.value)} 
              required
            ></input>
            <p>MEMBER 1 EMAIL</p>
            <input
              type="email"
              onChange={(e) => setMemberone(e.target.value)} 
              required
            ></input>
            <p>MEMBER 3 EMAIL</p>
            <input
              type="email"
              onChange={(e) => setMemberthree(e.target.value)} 
              required
            ></input>
          </Col>
          <Col xs={6}>
            <p>TEAM LEADER EMAIL</p>
            <input
              type="email"
              onChange={(e) => setTeamLeaderEmail(e.target.value)} 
              required
            ></input>
            <p>MEMBER 2 EMAIL</p>
            <input
              type="email"
              onChange={(e) => setMembertwo(e.target.value)} 
              required
            ></input>
            <p>PASSWORD</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)} 
              required
            ></input>
          </Col>
        </Row>

        <button type="submit">REGISTER</button>
      </form>
      </Fragment>}
      <p><a href="/">Login</a></p>
    </div>
  );
};

export default RegisterForm;
