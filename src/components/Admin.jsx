import React from 'react';
import AddBeer from './AddBeer';
import EditBeer from './EditBeer';


const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  margin: '0 auto',
  flexWrap: 'wrap'
};

function Admin({ masterKegList }) {
  return (
    <div style={containerStyles}>
      <AddBeer/>
      <EditBeer masterKegList={masterKegList}/>
    </div>
  );
}

export default Admin;
