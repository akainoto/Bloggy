import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../form/Input';
import Textarea from '../form/Textarea';
import './post.scss';

const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
  const {
    title,
    affLink,
    countdownDate,
    productLogo,
    productImage,
    reviewVideo,
    bonusOneImage,
    bonusTwoImage,
    bonusThreeImage,
    bonusFourImage,
    bonusFiveImage,
    slogan,
    body,
    errors,
    bgColor,
  } = post;

  return (
    <Container>
      <Row>
        <Col className='mx-auto'>
          <Form
            noValidate
            onSubmit={onSubmit}
            className='postFormFont font-weight-bold p-sm-3 p-xs-1'
          >
            <Input
              name='title'
              type='text'
              placeholder='EG: The 30 Minute Purpose Business'
              value={title}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Enter the Name of The Product',
                error: errors.title,
              }}
            />
            <Input
              name='productLogo'
              type='text'
              placeholder='EG: https://selfmadenewbie.com/wp-content/uploads/2020/06/Box_2.png'
              value={productLogo}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Enter the Product LOGO URL',
                error: errors.productLogo,
              }}
            />
            <Input
              name='bgColor'
              type='text'
              placeholder='Text or Hexidecimal Values only - EG: blue or #0000FF.'
              value={bgColor}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Enter Your Desired Background Color. ',
                error: errors.bgColor,
              }}
            />
            For Color Codes, Visit Here:
            <a
              href='
             https://htmlcolorcodes.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://htmlcolorcodes.com/
            </a>
            <br />
            <br />
            <Input
              name='affLink'
              type='text'
              placeholder='EG: https://warriorplus.com/o2/a/wjq50/0'
              value={affLink}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Enter The Product Affiliate Link',
                error: errors.affLink,
              }}
            />
            <Input
              name='countdownDate'
              type='text'
              placeholder='EG: Tomorrows Date Will Set the Timer for 1 Day. Format: YYYY-MM-DD'
              value={countdownDate}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Enter A Desired Countdown Date. FORMAT: YYYY-MM-DD',
                error: errors.countdownDate,
              }}
            />
            <Input
              name='productImage'
              type='text'
              placeholder='EG: The URL of an Image of the Product'
              value={productImage}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Enter an IMAGE URL of the Product',
                error: errors.productImage,
              }}
            />
            <Input
              name='reviewVideo'
              type='text'
              placeholder='EG: https://www.youtube.com/embed/jkLLugGyEPY'
              value={reviewVideo}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label:
                  'Video Link (Format: https://www.youtube.com/embed/VIDEO_ID',
                error: errors.reviewVideo,
              }}
            />
            <Textarea
              name='slogan'
              placeholder='EG: <b>Get 100% FREE</b> - Unstoppable “Viral Traffic” With The Press Of A Button!'
              value={slogan}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label:
                  'Enter the Product Slogan or Header Sales Text - HTML is Allowed',
                error: errors.slogan,
              }}
            />
            For Basic but Effective HTML Font Codes, Visit Here:
            <a
              href='
             https://www.w3schools.com/html/html_formatting.asp'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://www.w3schools.com/html/html_formatting.asp
            </a>
            <br />
            <br />
            <Textarea
              name='body'
              placeholder='<b>Bonus Dynamo</><p>Coming next month! Dont miss out!</p>'
              value={body}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label:
                  'Enter The Long Description and Pricing of the Product - HTML is Allowed',
                error: errors.body,
              }}
            />
            <br />
            Need BONUSES? -
            <a
              href='https://platinumrelease.com/get-bonuses'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click HERE -
            </a>
            for the Biggest Selection of Bonus Products on the Planet!
            <Input
              name='bonusOneImage'
              type='text'
              placeholder='Write the URL of your Bonus One Image here...'
              value={bonusOneImage}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Bonus One Image',
                error: errors.bonusOneImage,
              }}
            />
            <Input
              name='bonusTwoImage'
              type='text'
              placeholder='Write the URL of your Bonus Two Image here...'
              value={bonusTwoImage}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Bonus Two Image',
                error: errors.bonusTwoImage,
              }}
            />
            <Input
              name='bonusThreeImage'
              type='text'
              placeholder='Write the URL of your Bonus Three Image here...'
              value={bonusThreeImage}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Bonus Three Image',
                error: errors.bonusThreeImage,
              }}
            />
            <Input
              name='bonusFourImage'
              type='text'
              placeholder='Write the URL of your Bonus Four Image here...'
              value={bonusFourImage}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Bonus Four Image',
                error: errors.bonusFourImage,
              }}
            />
            <Input
              name='bonusFiveImage'
              type='text'
              placeholder='Write the URL of your Bonus Five or Vendor Bonus Image here...'
              value={bonusFiveImage}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: 'post',
                label: 'Bonus Five Image',
                error: errors.bonusFiveImage,
              }}
            />
            <Button
              variant='outline-info'
              type='submit'
              disabled={loading}
              className='btn btn-outline-info btn-lg mt-3'
            >
              Generate My Bonus Page!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
