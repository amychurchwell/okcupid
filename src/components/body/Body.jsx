import React from 'react';
import Splash from './Splash';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <Splash />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Body;
