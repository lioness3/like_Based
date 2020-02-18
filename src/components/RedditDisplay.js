import React from 'react';
import Post from './Post'
import PropTypes from 'prop-types';


function RedditDisplay(props) {
  console.log(props.redditdisplay);
  return (
    <div style={{margin:'50px'}}>
      {props.redditdisplay.map((reddit) =>
        <Post author={reddit.author}
          content={reddit.content}
          key={reddit.id}/>
      )}
    </div>
  );
}

 RedditDisplay.propTypes = {
   redditdisplay: PropTypes.array
 };

export default RedditDisplay;
