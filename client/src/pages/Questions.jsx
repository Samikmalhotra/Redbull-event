import React from 'react';
import {Row, Col} from 'react-bootstrap'

const Questions = () => {
  return <div className='questions'>
      <h1>Questions</h1>
      <div className='question-div'>
          <div className='question'>
                What is this behaviour?
          </div>
          <div className='answer-div'>
              <Row>
                  <Col xs={6}></Col>
                  <Col xs={6}></Col>
                  <Col xs={6}></Col>
                  <Col xs={6}></Col>    
              </Row>
          </div>
      </div>
  </div>;
};

export default Questions;
