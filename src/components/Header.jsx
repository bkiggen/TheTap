import React from 'react';
import barrels from '../assets/img/barrels.jpg';

function Header(){

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateNow = new Date();
  const headerStyles = {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: '100%',
    height: '80px',
    marginTop: '0px'
  };
  
  return (
    <div style={headerStyles}>
      <h1>Tap List for {dateNow.toLocaleDateString('en-Us', options)} </h1>
    </div>
  );
}

export default Header;
