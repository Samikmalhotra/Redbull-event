import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [teamName, setTeamName] = useState("");
  const [teamLeaderEmail, setTeamLeaderEmail] = useState("");
  const [memberone, setMemberone] = useState("");
  const [membertwo, setMembertwo] = useState("");
  const [memberthree, setMemberthree] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(null)
  const [customerror, setError] = useState(false)
  const [show, setShow] = useState(false);


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


    try {
      const res = await axios.post(
        "https://redbullapi.ccstiet.com/register/",
        body
      );
  
      setRes(res)
    } catch (error) {
      setError(true);
      setShow(true);
    }
    


  };

  

  return (
    <div className="register">
      {res && res.data && res.data.success ? <p className="task">Your team has been successfully registered</p>:<Fragment>
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
      {customerror ? (
          <ToastContainer className="p-3" position="bottom-start" autohide> 
            <Toast onClose={()=>setShow(false)} show={show} delay={5000} autohide>
              <Toast.Header closeButton={false}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Red Rush</strong>
                <small>HackTU</small>
              </Toast.Header>
              <Toast.Body>Try Again with a different team name or check if members are already in another team</Toast.Body>
            </Toast>
          </ToastContainer>
        ) : (
          ""
        )}
      <p><a href="/">Login</a></p>
    </div>
  );
};

export default RegisterForm;
