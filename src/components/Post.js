import React, { useState } from 'react';
import PropTypes from "prop-types";
import './Post.css';




function Post(props) {
const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <h3>{props.author}</h3>
        <p>{props.content}</p>
        <p><button onClick={() => setCounter(counter + 1)}   style={{background:'inherit',border:'none'}}> 👍</button> {counter}</p>
        <p><button onClick={() => setCounter(counter + 1)}  style={{background:'inherit',border:'none'}}> 👎</button>{counter}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
};

export default Post;
