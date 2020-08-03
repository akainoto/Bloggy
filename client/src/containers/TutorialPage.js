import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TutorialPage = () => {
  return (
    <Container className='mt-4 viewPost'>
      <Row className='text-center'>
        <div class='p-2 col-sm'>
          <h1>Tutorials and FAQ</h1>
          <p>
            These tutorials have been made to ensure you get the most out of
            BBonus Dynamo. For any futher requests please email
            support@bonusbander.com
          </p>
        </div>
      </Row>

      {/* ** WORKING ** */}
      <Row className='container border'>
        <Col className='md=auto'>
          <div className='m-2 embed-responsive embed-responsive-16by9'>
            <iframe
              title='tutorial1'
              src='https://www.youtube.com/embed/ngaymSZPU8M'
              className='embed-responsive-item'
            ></iframe>
          </div>
        </Col>
        <Col clasName='col-sm text-left'>
          <div className='m-2'>
            <h3>1. How To Set Up Pages</h3>
          </div>
        </Col>
      </Row>

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial2'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/HdjJghfRl38'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>2. How To Drive Traffic & Make Sales</h3>
        </Col>
      </Row>

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial3'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/SDHhmYaKPDY'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>3. Setting Up Affiliate Accounts</h3>
        </Col>
      </Row>

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial4'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/PPhT7LwfYA8'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>4. Finding and Selecting Bonuse</h3>
          <br />
          <a
            href='https://e0d63jqrr7jmwg1gr9qoav6u9t.hop.clickbank.net/'
            target='_blank'
            rel='noopener noreferrer'
            class='btn btn-success btn-lg btn-block'
            role='button'
          >
            Visit IDPLR
          </a>
        </Col>
      </Row>

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial5'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/4XOMskgN8w4'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>5. Making Your Strategy More Efficient</h3>
          <br />
          <a
            href='https://jvz6.com/c/529993/349208'
            target='_blank'
            rel='noopener noreferrer'
            class='btn btn-success btn-lg btn-block'
            role='button'
          >
            Get DFY Suite
          </a>
          <br />
          <br />

          <a
            href='https://jvz8.com/c/529993/351319'
            target='_blank'
            rel='noopener noreferrer'
            class='btn btn-success btn-lg btn-block'
            role='button'
          >
            Get MaxDrive
          </a>
        </Col>
      </Row>

      <br />
      <h1>Frequently Asked Questions.</h1>
      <br />

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial7'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/11qGLeCGZ9Q'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>1. Why aren't images displaying properly?</h3>
        </Col>
      </Row>

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial8'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/IYLAlzAx5yU'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>2. Why isn't my video displaying properly?</h3>
        </Col>
      </Row>

      <Row className='container border'>
        <Col className='md=auto'>
          <div>
            <iframe
              title='tutorial9'
              style={{ width: '30rem', height: '20rem' }}
              src='https://www.youtube.com/embed/rk8xhwTh35M'
              className='img-responsive'
            ></iframe>
          </div>
        </Col>
        <Col class='col-sm text-left'>
          <h3>3. How do I apply bold, italic text, and Other HTML?</h3>
        </Col>
      </Row>

      <div>
        <br />
        <a href='/product'>
          <h4>&lt; Go Back to Product Page.</h4>
        </a>
        <br />
        <br />
      </div>
    </Container>
  );
};

export default TutorialPage;
