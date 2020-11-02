import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bdlogo from '../../static/bdlogo.png';
import './Landing.css';

const Landing = () => (
  <Container
    style={{ height: '75vh' }}
    className='d-flex flex-column col-6 justify-content-center align-items-center'
  >
    <Row>
      <Col className='text-center'>
        <div>
          <p className='mb-4 text-secondary h1'> Welcome to Bonus Dynamo</p>
          <p className='mb-4 text-secondary h4'>
            Rapidly Create Optimized Bonus Pages On The Fly!
          </p>
        </div>
        <div className='text-center'>
          <Image src={bdlogo} alt='mongo' className='mb-4' />
        </div>
        <div>
          <p className='mb-4 text-secondary h3'>
            Don't have an account?{' '}
            <Link to={'https://platinumrelease.com/bonus-dynamo-live'}>
              Sign Up!
            </Link>
          </p>
          <p className='mb-4 text-secondary p'>
            Already have an account? <Link to={'/login'}>Login.</Link>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Landing;
