import axios from "axios";
import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const RegisterForm = () => {
  const [teamName, setTeamName] = useState("");
  const [teamLeaderEmail, setTeamLeaderEmail] = useState("");
  const [memberone, setMemberone] = useState("");
  const [membertwo, setMembertwo] = useState("");
  const [memberthree, setMemberthree] = useState("");
  const [password, setPassword] = useState("");

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
      "https://redbullapi.ccstiet.com/register",
      body
    );
    console.log(res);
  };

  return (
    <div className="register">
      <h1 className="login-profile">REGISTER</h1>
      <form onSubmit={submitHandler}>
        <Row>
          <Col xs={6}>
            <p>TEAM NAME</p>
            <input
              type="text"
              onChange={(e) => setTeamName(e.target.value)}
            ></input>
            <p>MEMBER 1 EMAIL</p>
            <input
              type="email"
              onChange={(e) => setMemberone(e.target.value)}
            ></input>
            <p>MEMBER 3 EMAIL</p>
            <input
              type="email"
              onChange={(e) => setMemberthree(e.target.value)}
            ></input>
          </Col>
          <Col xs={6}>
            <p>TEAM LEADER EMAIL</p>
            <input
              type="email"
              onChange={(e) => setTeamLeaderEmail(e.target.value)}
            ></input>
            <p>MEMBER 2 EMAIL</p>
            <input
              type="email"
              onChange={(e) => setMembertwo(e.target.value)}
            ></input>
            <p>PASSWORD</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </Col>
        </Row>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default RegisterForm;
