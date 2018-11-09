import React from 'react';
import barrels from '../assets/img/barrelicon.png';

function Header(){

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateNow = new Date();
  
  const headerStyles = {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: '100%',
    height: '200px',
    marginTop: '0px'
  };
  const imageStyles = {
    height: '60px',
    width: '60px',
    marginTop: '50px'
  }
  const h1Styles = {
    margin: '0px'
  }
  
  return (
    <div style={headerStyles}>
      <img src={barrels} style={imageStyles}/>
      <h1 style={h1Styles}>Mr. Cooper's</h1>
      <h3 style={h1Styles}> Tap List: {dateNow.toLocaleDateString('en-Us', options)}</h3>
    </div>
  );
}

export default Header;
