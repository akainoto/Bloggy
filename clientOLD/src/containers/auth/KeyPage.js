import React, { useRef, useState } from 'react';
import bdlogo from '../../static/bdlogo.png';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export default function KeyPage() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  }

  return (
    <Container className='text-center'>
      <Image src={bdlogo} alt='' />
      <Row>
        <Col>
          <div>
            <div>
              <h2>Congratulations on your purchase!</h2>
            </div>
            <div>
              <p>
                <strong>Follow the Instructions below to get Access!</strong>
              </p>
            </div>
            <div>
              <p>1. Copy the Private Key Below (Do NOT Share)</p>
              <form>
                <input
                  ref={textAreaRef}
                  size='26'
                  value='AKFE-20LD-33K9-HHG6-KJ47'
                />
              </form>
              <div>
                <Button onClick={copyToClipboard}>Copy</Button>
                {copySuccess}
              </div>
              <br />
              <p>2. Click the Register Button Below</p>

              <p>
                3. Paste the Key in the Key Field along with your email and
                desired password.
              </p>
              <br />
              <a href='/membership-creation28683page_key=sr7923'>
                <h2>Register!</h2>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
