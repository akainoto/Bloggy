import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MapModal from './Modal';
import bdlogo from '../../static/bdlogo.png';

const Navigationbar = ({ auth, onClick }) => (
  <Navbar
    bg='dark'
    variant='dark'
    expand='lg'
    className='mb-3'
    style={{ minHeight: '4rem' }}
  >
    <Link to='/product'>
      <Navbar.Brand>
        <img
          src={bdlogo}
          style={{ height: 35, width: 35 }}
          className='d-inline-block align-top'
          alt=''
        />
        <strong>{' Bonus Dynamo'}</strong>
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav>
        {auth ? (
          <Nav.Link href='/product'>Pages</Nav.Link>
        ) : (
          <Nav.Link></Nav.Link>
        )}
      </Nav>
      <Nav>{auth ? <MapModal /> : <Nav.Link></Nav.Link>}</Nav>

      <Nav>
        {auth ? (
          <Nav.Link href='/tutorial'>Tutorial</Nav.Link>
        ) : (
          <Nav.Link></Nav.Link>
        )}
      </Nav>
      <Nav>
        {auth ? (
          <Nav.Link href='https://tinyurl.com/' target='_blank'>
            URL Shortener
          </Nav.Link>
        ) : (
          <Nav.Link></Nav.Link>
        )}
      </Nav>
      <Nav>
        {auth ? (
          <Nav.Link
            href='https://e0d63jqrr7jmwg1gr9qoav6u9t.hop.clickbank.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Get Bonuses
          </Nav.Link>
        ) : (
          <Nav.Link></Nav.Link>
        )}
      </Nav>

      <Nav className='ml-auto'>
        {auth ? (
          <Link to='/logout'>
            <Button
              variant='outline-light'
              className='mr-sm-2'
              onClick={onClick}
            >
              Logout
            </Button>
          </Link>
        ) : (
          <Link to='/login'>
            <Button variant='outline-light' className='mr-sm-2'>
              Login
            </Button>
          </Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Navigationbar.propTypes = {
  auth: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigationbar;
