import React from 'react';
import{ Link } from'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import './PostForm.css';
import Moment from 'moment';

function PostForm(props) {
  let _author = null;
  let _content = null;
  function handleNewPost(event) {
    event.preventDefault();
    props.onNewPost({author: _author.value, content: _content.value, id: v4(), timeOpen: new Moment()});
    _author.value = '';
    _content.value = '';
  }

  return (
    <div className='formStyle'>
      <form onSubmit={handleNewPost}>
        <input
          type="text"
          id="author"
          placeholder='author'
          ref={(input) => {_author = input;}}/>
        <textarea
          type="text"
          id="content"
          placeholder='content'
          ref={(textarea) => {_content = textarea;}}/>
        <button type="submit"> CREATE!</button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  onNewPost: PropTypes.func
};

export default PostForm;
