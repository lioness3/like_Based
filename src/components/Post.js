import React from 'react';
import PropTypes from "prop-types";



function Post(props) {
  return (
    <div>
      <div>
        <h3>{props.author}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
};

export default Post;
