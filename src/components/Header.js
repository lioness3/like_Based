import React from 'react';
import{ Link } from'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>Home</Link> | <Link to='/new'>New</Link>
      <div className='dropDwn'>
        <button className='sortBtn'> Sort by </button>
          <div className='dropOptions'>
            <button> option1</button>
            <button>2 </button>
            <button> 3</button>
            <button>4 </button>
          </div>
      </div>
    </div>
  );
}

export default Header;
