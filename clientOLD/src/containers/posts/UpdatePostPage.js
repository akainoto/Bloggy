import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../../components/posts/PostForm';
import Validate from '../../components/form/Validate';
import { connect } from 'react-redux';
import { getPostByID, updatePost } from '../../actions/postActions';

const UpdatePostPage = ({
  errors,
  updatePost,
  loading,
  currentPost,
  getPostByID,
  match,
  history,
}) => {
  const [post, setPost] = useState({
    title: '',
    affLink: '',
    countdownDate: '',
    productLogo: '',
    productImage: '',
    reviewVideo: '',
    bonusOneImage: '',
    bonusTwoImage: '',
    bonusThreeImage: '',
    bonusFourImage: '',
    bonusFiveImage: '',
    slogan: '',
    body: '',
    bgColor: '',
    errors: {},
  });

  useEffect(() => {
    getPostByID(match.params.id);
  }, [match, getPostByID]);

  // updating the local state of post with the received post data
  useEffect(() => {
    setPost((post) => ({
      title: currentPost.title,
      bgColor: currentPost.bgColor,
      affLink: currentPost.affLink,
      countdownDate: currentPost.countdownDate,
      productLogo: currentPost.productLogo,
      productImage: currentPost.productImage,
      reviewVideo: currentPost.reviewVideo,
      bonusOneImage: currentPost.bonusOneImage,
      bonusTwoImage: currentPost.bonusTwoImage,
      bonusThreeImage: currentPost.bonusThreeImage,
      bonusFourImage: currentPost.bonusFourImage,
      bonusFiveImage: currentPost.bonusFiveImage,
      slogan: currentPost.slogan,
      body: currentPost.body,
      errors: { ...post.errors },
    }));
  }, [currentPost]);

  useEffect(() => {
    setPost((post) => {
      return { ...post, errors };
    });
  }, [errors]);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = { ...post.errors, ...Validate(name, value).errors };
    setPost({ ...post, errors: { ...error } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
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
    } = post;
    updatePost(
      currentPost._id,
      {
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
      },
      history
    );
  };

  // to ensure that the post is loaded otherwise we would make uncontrolled form access error
  const isPostLoaded = () => {
    return (
      post.title ||
      post.bgColor ||
      post.affLink ||
      post.countdownDate ||
      post.productLogo ||
      post.productImage ||
      post.reviewVideo ||
      post.bonusOneImage ||
      post.bonusTwoImage ||
      post.bonusThreeImage ||
      post.bonusFourImage ||
      post.bonusFiveImage ||
      post.slogan ||
      post.body ||
      Object.keys(post.errors).length > 0
    );
  };

  return isPostLoaded() ? (
    <PostForm
      loading={loading}
      post={post}
      onChange={handleChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    />
  ) : (
    <div />
  );
};

const mapStateToProps = (state) => ({
  currentPost: state.post.post,
  loading: state.post.postLoading,
  errors: state.errors,
});

UpdatePostPage.propTypes = {
  currentPost: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  getPostByID: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getPostByID, updatePost })(
  UpdatePostPage
);
