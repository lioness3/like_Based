import React, { useState } from 'react';
import PropTypes from "prop-types";
import './Post.css';
import Moment from 'moment';



function Post(props) {
const [likeCounter, setLikeCounter] = useState(0);
const [dislikeCounter, setDislikeCounter] = useState(0);
  console.log("from post", likeCounter);
  return (
    <div>
      <div className='post'>
        <h3 style={{color:'purple'}}>{props.author}</h3>
        <p>{props.content}</p>
        <p><button onClick={() => setLikeCounter(likeCounter + 1)}   style={{background:'inherit',border:'none'}}> 👍</button><span style={{color:'yellow'}}> {likeCounter}</span></p>
        <p><button onClick={() => setDislikeCounter(dislikeCounter + 1)}  style={{background:'inherit',border:'none'}}> 👎</button><span style={{color:'yellow'}}>{dislikeCounter}</span></p>
              <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      </div>
    </div>
  );
}
function displayTimeOpen(timeOpen) {
 return timeOpen.from(new Moment(), true);
}
Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment)
};

export default Post;
