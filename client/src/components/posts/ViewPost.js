import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getFormattedDate from '../../utils/getFormattedDate';

import bonusHeader from '../../img/bonusHeader.png';
import instructions from '../../img/instructions.png';

import bonusOne from '../../img/bonusOne.png';
import bonusTwo from '../../img/bonusTwo.png';
import bonusThree from '../../img/bonusThree.png';
import bonusFour from '../../img/bonusFour.png';
import bonusFive from '../../img/bonusFive.png';

import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './post.scss';
import { SocialIcon } from 'react-social-icons';
import ReactHtmlParser from 'react-html-parser';

const ViewPost = ({ post, auth, onDelete, onEdit }) => {
  const postDate = getFormattedDate(post.date);

  function CountdownTimer() {
    const calculateTimeLeft = () => {
      const difference = +new Date(post.countdownDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{' '}
        </span>
      );
    });

    return (
      <div class='display-5'>
        <strong>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </strong>
      </div>
    );
  }

  return (
    <Container className='mt-4 viewPost'>
      <Row style={{ backgroundColor: post.bgColor }}>
        <Col>
          <img
            className='vipBonusBundle'
            src={bonusHeader}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </Col>
      </Row>

      {/* PRODUCT LOGO */}

      <Row style={{ backgroundColor: post.bgColor }} className='text-center'>
        <Col>
          <Image
            src={post.productLogo}
            alt='Product Logo'
            style={{ width: '75%', height: '75%' }}
          />
        </Col>
      </Row>

      {/* PRODUCT SLOGAN */}

      <Row
        className='productSlogan text-center whiteText bonusPadding'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>{ReactHtmlParser(post.slogan)}</Col>
      </Row>

      {/* VIDEO */}

      <Row className='text-center' style={{ backgroundColor: post.bgColor }}>
        <Col>
          <div class='embed-responsive embed-responsive-16by9'>
            <iframe
              title='videoReview'
              class='embed-responsive-item'
              src={post.reviewVideo}
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* COUNTDOWN WARING ONE */}
      <Row
        className='countdownWarning text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <strong>IMPORTANT: </strong>These Bonuses Expire In...
        </Col>
      </Row>

      {/* COUNTDOWN ONE */}

      <Row
        className='countdownTimer text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <CountdownTimer />
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 1 */}
      <div>
        <Row
          className='affiliateButton'
          style={{ backgroundColor: post.bgColor }}
        >
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* DESCRIPTION QUESTIONING TITLE */}
      <Row className='productAboutQuestion text-center postTitle'>
        <Col>What is {post.title} All About?</Col>
      </Row>

      {/* PRODUCT IMAGE */}

      <Row className='text-center'>
        <Col xs lg='2'></Col>
        <Col>
          <Image
            src={post.productImage}
            alt='Product Image'
            style={{ width: '20rem', height: '20rem' }}
          />
        </Col>
        <Col xs lg='2'></Col>
      </Row>

      {/* LONG DESCRIPTION */}
      <div className='longDescription'>
        <Row className='my-4' style={{ whiteSpace: 'pre-wrap' }}>
          <Col>{ReactHtmlParser(post.body)}</Col>
        </Row>
      </div>

      {/* AFFILIATE BUTTON 2 */}
      <div>
        <Row className='affiliateButton'>
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* GET (Product) BREAKER */}

      <Row
        className='breakerText text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          Get {post.title} Today & Get Access to These Exclusive Bonuses
        </Col>
      </Row>

      {/* BONUS NUMBER ONE */}
      <Row className='text-center justify-content-md-center'>
        <Col xs lg='2'>
          <div className='bonusLabel'>
            <img
              src={bonusOne}
              alt=''
              style={{ width: '10rem', height: 'auto' }}
              class='img-responsive'
            />
          </div>
          <div className='bonusValue'>PREMIUM TIER</div>
        </Col>

        <Col>
          <img
            src={post.bonusOneImage}
            alt=''
            style={{ width: '70%', height: 'auto' }}
            className='img-fluid img-responsive bonusPadding'
          />
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 3 */}
      <div>
        <Row className='affiliateButton'>
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* BONUS NUMBER TWO */}

      <Row className='text-center justify-content-md-center'>
        <Col xs lg='2'>
          <div className='bonusLabel'>
            <Image
              src={bonusTwo}
              alt=''
              style={{ width: '10rem', height: 'auto' }}
            />
          </div>
          <div className='bonusValue'>PREMIUM TIER</div>
        </Col>

        <Col md='auto'>
          <div className='bonusBoxContainer'>
            <img
              src={post.bonusTwoImage}
              alt=''
              style={{ width: '30rem', height: 'auto' }}
              className='img-fluid img-responsive bonusPadding'
            />
          </div>
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 4 */}
      <div>
        <Row className='affiliateButton'>
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* BONUS NUMBER THREE */}

      <Row className='text-center justify-content-md-center'>
        <Col xs lg='2'>
          <div className='bonusLabel'>
            <Image
              src={bonusThree}
              alt=''
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='bonusValue'>PREMIUM TIER</div>
        </Col>

        <Col md='auto'>
          <div className='bonusBoxContainer'>
            <Image
              src={post.bonusThreeImage}
              alt=''
              style={{ width: '30rem', height: '30rem' }}
            />
          </div>
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 5 */}
      <div>
        <Row className='affiliateButton'>
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* BONUS NUMBER FOUR */}

      <Row className='text-center justify-content-md-center'>
        <Col xs lg='2'>
          <div className='bonusLabel'>
            <Image
              src={bonusFour}
              alt=''
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='bonusValue'>PREMIUM TIER</div>
        </Col>

        <Col md='auto'>
          <div className='bonusBoxContainer'>
            <Image
              src={post.bonusFourImage}
              alt=''
              style={{ width: '30rem', height: '30rem' }}
            />
          </div>
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 6 */}
      <div>
        <Row className='affiliateButton'>
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* BONUS NUMBER FIVE */}

      <Row className='text-center justify-content-md-center'>
        <Col xs lg='2'>
          <div className='bonusLabel'>
            <Image
              src={bonusFive}
              alt=''
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='bonusValue'>PREMIUM TIER</div>
        </Col>

        <Col md='auto'>
          <div className='bonusBoxContainer'>
            <Image
              src={post.bonusFiveImage}
              alt=''
              style={{ width: '30rem', height: '30rem' }}
            />
          </div>
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 7 */}
      <div>
        <Row className='affiliateButton'>
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* FINAL SCRACITY WARNING */}
      <Row
        className='productSlogan text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <p>Don't Miss Out!</p>
          <p>
            Click The Button Below And Claim Your Exclusive FREE Bonus Package!
          </p>
        </Col>
      </Row>

      {/* COUNTDOWN WARING TWO */}
      <Row
        className='countdownWarning text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <strong>IMPORTANT: </strong>These Bonuses Expire In...
        </Col>
      </Row>

      {/* COUNTDOWN TWO */}

      <Row
        className='countdownTimer text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <CountdownTimer />
        </Col>
      </Row>

      {/* AFFILIATE BUTTON 8 */}
      <div>
        <Row
          className='affiliateButton'
          style={{ backgroundColor: post.bgColor }}
        >
          <Col>
            <Button href={post.affLink} variant='success' size='lg' block>
              <h2>Click Here To Secure Your Copy & Bonuses</h2>
            </Button>
          </Col>
        </Row>
      </div>

      {/* INSTRUCTIONS */}
      <Row>
        <Col>
          <img
            className='instructions'
            src={instructions}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </Col>
      </Row>

      {/* SIGN OFF MESSAGE */}

      <Row
        className='text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <div className='signoff'>
            <p>Hi there! </p>

            <p>
              I hope you found value in this review as well as the bonuses I've
              gotten for you. If you know someone who might appreciate{' '}
              {post.title}, feel free to Share Below. Best Luck going forward!
            </p>
          </div>
        </Col>
      </Row>

      {/* SHARE BUTTONS */}

      <Row
        className='breakerText text-center whiteText'
        style={{ backgroundColor: post.bgColor }}
      >
        <Col>
          <SocialIcon url='https://twitter.com/intent/tweet' />
          <SocialIcon url='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse' />
          <SocialIcon url='https://pinterest.com/pin/create/link/?url=<?php the_permalink();?>&amp;description=<?php the_title();?>' />
        </Col>
      </Row>

      {/* AUTHOR & DATE */}

      <Row className='d-flex flex-column font-italic footerStyle'>
        <Col>Date: {postDate}</Col>
      </Row>
      {auth && (
        <Row className='mt-4'>
          <Col className='text-center'>
            <Button className='mr-2' variant='outline-info' onClick={onEdit}>
              Edit
            </Button>
            <Button variant='outline-danger' onClick={onDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ViewPost;
