import React from 'react';
import BeerList from './BeerList';
import AddBeer from './AddBeer';
import EditBeer from './EditBeer';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  margin: '0 auto',
  flexWrap: 'wrap'
}

function Admin() {
  return (
    <div style={containerStyles}>
      <AddBeer/>
      <EditBeer/>
    </div>
  );
}

export default Admin;