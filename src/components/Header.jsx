import React from 'react';
import barrels from '../assets/img/barrelicon.png';

function Header(){

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateNow = new Date();
  
  const headerStyles = {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: '100%',
    height: '300px',
    marginTop: '0px'
  };

  const imageStyles = {
    height: '60px',
    width: '60px',
    marginTop: '20px'
  };
  
  const h1Styles = {
    margin: '5px'
  };
  
  const hrStyles = {
    width: '300px',
    margin: '0 auto'
  };
  
  const tapListStyles = {
    fontStyle: 'italic',
    margin: '5px'
  };
  
  return (
    <div style={headerStyles}>
      <img src={barrels} style={imageStyles}/>
      <h1 style={h1Styles}>Mr. Cooper's</h1>
      <hr style={hrStyles}/>
      <h1 style={tapListStyles}>Tap List</h1>
      <hr style={hrStyles}/>
      <h3 style={h1Styles}>  {dateNow.toLocaleDateString('en-Us', options)}</h3>
    </div>
  );
}

export default Header;
