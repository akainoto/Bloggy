import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bdlogo from '../../static/bdlogo.png';
import './Landing.css';

const Landing = () => (
  <Container
    style={{ height: '75vh' }}
    className='d-flex flex-column col-6 justify-content-center align-items-center'
  >
    <Row className='mb-4 '>
      <p className='text-secondary h1'> Welcome to Bonus Dynamo</p>
    </Row>
    <Row className='mb-4'>
      <p className='text-secondary h4'>
        Rapidly Create Optimized Bonus Pages On The Fly!
      </p>
    </Row>
    <Row className='mb-4'>
      <img src={bdlogo} alt='mongo' className='img-fluid' />
    </Row>
    <Row className='mb-4'>
      <p className='text-secondary h3'>
        Don't have an account? <Link to={'/signup'}>Sign Up!</Link>
      </p>
    </Row>
    <Row className='mb-4'>
      <p className='text-secondary p'>
        Already have an account? <Link to={'/login'}>Login.</Link>
      </p>
    </Row>
  </Container>
);

export default Landing;
