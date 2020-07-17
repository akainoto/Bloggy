const PATTERN = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$';

const Validate = (name, value) => {
  let errors = {};
  switch (name) {
    case 'name':
      errors.name = value.length === 0 ? 'Username is required' : '';
      break;
    case 'email':
      errors.email =
        value.length === 0
          ? 'Email is required'
          : !value.match(PATTERN)
          ? 'Enter a valid email id'
          : '';
      break;
    case 'password':
      errors.password =
        value.length === 0
          ? 'Password is required'
          : value.length < 6
          ? 'Password must be atleast 6 characters'
          : '';
      break;
    case 'title':
      errors.title = value.length === 0 ? 'Title is required' : '';
      break;
    case 'countdownDate':
      errors.countdownDate = value.length === 0 ? 'Title is required' : '';
      break;
    case 'affLink':
      errors.affLink = value.length === 0 ? 'Affiliate Link is required' : '';
      break;
    case 'productLogo':
      errors.productLogo = value.length === 0 ? 'Product Logo is required' : '';
      break;
    case 'productImage':
      errors.productImage =
        value.length === 0 ? 'Product Image is required' : '';
      break;
    case 'reviewVideo':
      errors.reviewVideo =
        value.length === 0 ? 'Product Image is required' : '';
      break;
    case 'slogan':
      errors.slogan = value.length === 0 ? 'Slogan is required' : '';
      break;
    case 'body':
      errors.body = value.length === 0 ? 'Description is required' : '';
      break;
    case 'bonusOneImage':
      errors.bonusOneImage =
        value.length === 0 ? 'Description is required' : '';
      break;
    case 'bonusTwoImage':
      errors.bonusTwoImage =
        value.length === 0 ? 'Description is required' : '';
      break;
    case 'bonusThreeImage':
      errors.bonusThreeImage =
        value.length === 0 ? 'Description is required' : '';
      break;
    case 'bonusFourImage':
      errors.bonusFourImage =
        value.length === 0 ? 'Description is required' : '';
      break;
    case 'bonusFiveImage':
      errors.bonusFiveImage =
        value.length === 0 ? 'Description is required' : '';
      break;
    case 'bgColor':
      errors.bgColor = value.length === 0 ? 'Description is required' : '';
      break;
    default:
      break;
  }

  return {
    errors,
  };
};

export default Validate;
