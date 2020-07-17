const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validatePostInput = (data) => {
  let errors = {};

  let {
    title,
    bgColor,
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
  } = data;
  // Converting empty fields to empty string as validator function works only with strings
  title = !isEmpty(title) ? title : '';
  bgColor = !isEmpty(bgColor) ? bgColor : '';
  affLink = !isEmpty(affLink) ? affLink : '';
  countdownDate = !isEmpty(countdownDate) ? countdownDate : '';
  productLogo = !isEmpty(productLogo) ? productLogo : '';
  productImage = !isEmpty(productImage) ? productImage : '';
  reviewVideo = !isEmpty(reviewVideo) ? reviewVideo : '';
  bonusOneImage = !isEmpty(bonusOneImage) ? bonusOneImage : '';
  bonusTwoImage = !isEmpty(bonusTwoImage) ? bonusTwoImage : '';
  bonusThreeImage = !isEmpty(bonusThreeImage) ? bonusThreeImage : '';
  bonusFourImage = !isEmpty(bonusFourImage) ? bonusFourImage : '';
  bonusFiveImage = !isEmpty(bonusFiveImage) ? bonusFiveImage : '';
  slogan = !isEmpty(slogan) ? slogan : '';
  body = !isEmpty(body) ? body : '';

  if (Validator.isEmpty(title)) {
    errors.title = 'Title is required';
  }
  if (Validator.isEmpty(bgColor)) {
    errors.bgColor = 'Background Color is required';
  }
  if (Validator.isEmpty(affLink)) {
    errors.affLink = 'Affiliate Link is required';
  }
  if (Validator.isEmpty(countdownDate)) {
    errors.countdownDate = 'Countdown Date is required';
  }
  if (Validator.isEmpty(productLogo)) {
    errors.productLogo = 'Product Logo is required';
  }
  if (Validator.isEmpty(productImage)) {
    errors.productImage = 'Product Image is required';
  }
  if (Validator.isEmpty(reviewVideo)) {
    errors.reviewVideo = 'Video Link is required';
  }
  if (Validator.isEmpty(bonusOneImage)) {
    errors.bonusOneImage = 'Bonus One Image is required';
  }
  if (Validator.isEmpty(bonusTwoImage)) {
    errors.bonusTwoImage = 'Bonus Two Image is required';
  }
  if (Validator.isEmpty(bonusThreeImage)) {
    errors.bonusThreeImage = 'Bonus Three Image is required';
  }
  if (Validator.isEmpty(bonusFourImage)) {
    errors.bonusFourImage = 'Bonus Four Image is required';
  }
  if (Validator.isEmpty(bonusFiveImage)) {
    errors.bonusFiveImage = 'Bonus Five Image is required';
  }
  if (Validator.isEmpty(slogan)) {
    errors.slogan = 'Slogan is required';
  }
  if (Validator.isEmpty(body)) {
    errors.body = 'Description is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
