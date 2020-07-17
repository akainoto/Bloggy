const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = {
  title: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  affLink: {
    type: String,
    required: true,
  },
  countdownDate: {
    type: String,
    required: true,
  },
  productLogo: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  reviewVideo: {
    type: String,
    required: true,
  },
  bonusOneImage: {
    type: String,
    required: true,
  },
  bonusTwoImage: {
    type: String,
    required: true,
  },
  bonusThreeImage: {
    type: String,
    required: true,
  },
  bonusFourImage: {
    type: String,
    required: true,
  },
  bonusFiveImage: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
};

const PostSchema = new Schema(post);

module.exports = mongoose.model('posts', PostSchema);
