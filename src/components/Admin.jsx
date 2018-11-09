import React from 'react';
import BeerList from './BeerList';
import AddBeer from './AddBeer';
import EditBeer from './EditBeer';

function Admin() {
  return (
    <div>
      <AddBeer/>
      <EditBeer/>
    </div>
  );
}

export default Admin;