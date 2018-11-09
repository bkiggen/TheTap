import React from 'react';
import barrels from '../assets/img/barrelicon.png';
import { Link } from 'react-router-dom';

function Header(){

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateNow = new Date();
  
  const containerStyles = {
    backgroundColor: 'white'
  };
  
  const headerStyles = {
    textAlign: 'center',
    width: '100%',
    height: '300px',
    marginTop: '0px',
    backgroundColor: 'white'
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
    <div className="dropdown">
      <div>
        <div className="dropbutton">
        X
        </div>
        <style jsx>{`
          .dropbutton {
              background-color: #4CAF50;
              color: white;
              padding: 16px;
              font-size: 16px;
              border: none;
          }
          
          .dropdown {
              position: relative;
              display: inline-block;
          }

          .dropdown-content {
              display: none;
              position: absolute;
              background-color: #f1f1f1;
              min-width: 160px;
              box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
              z-index: 1;
          }
          
          .dropdown-content .link {
              color: black;
              padding: 12px 16px;
              text-decoration: none;
              display: block;
          }

          .dropdown-content  .link:hover {background-color: #ddd;}
          
          .dropdown:hover  .dropdown-content {display: block;}
    
          .dropdown:hover .dropbutton {background-color: #3e8e41;}
          
          `}</style>
        <div className="dropdown-content">
          <div className="link">
            <Link to='/'>Home</Link>
          </div>
          <div className="link">
            <Link to='/Admin'>Admin</Link>
            <div>
            </div>
          </div>
        </div>
      </div>
          <div style={headerStyles}>
            <img src={barrels} style={imageStyles}/>
            <h1 style={h1Styles}>Mr. Cooper's</h1>
            <hr style={hrStyles}/>
            <h1 style={tapListStyles}>Tap List</h1>
            <hr style={hrStyles}/>
            <h3 style={h1Styles}>  {dateNow.toLocaleDateString('en-Us', options)}</h3>
          </div>
        </div>
  );
}

export default Header;
