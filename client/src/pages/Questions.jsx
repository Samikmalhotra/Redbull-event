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
                  <Col xs={6}>
                      <div className='answer'>
                          NADA

                      </div>
                  </Col>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA

                      </div>
                  </Col>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA

                      </div>
                  </Col>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA
                          </div></Col>    
              </Row>
          </div>
          <div className='question'>
                What is this behaviour?
          </div>
          <div className='answer-div'>
              <Row>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA

                      </div>
                  </Col>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA

                      </div>
                  </Col>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA

                      </div>
                  </Col>
                  <Col xs={6}>
                      <div className='answer'>
                          NADA
                          </div></Col>    
              </Row>
          </div>
      </div>
  </div>;
};

export default Questions;
