import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <h1>No such number, no such zone.</h1>
      <Link to='/'>Go back?</Link>
    </div>
  );
}


export default Error404;
