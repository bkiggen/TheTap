import React from 'react';
import BeerList from './BeerList';

const editStyles = {
  width: '450px',
  margin: '0 auto',
  textAlign: 'center'
};

const padding = {
  margin: '5px',
  padding: '5px'
};

function EditBeer( { masterKegList, editKeg }) {
  return (
    <div style={editStyles}>
      <h1><em>Edit</em> Existing Keg</h1>
      <BeerList masterKegList={masterKegList}
        editKeg={editKeg}
      />
    </div>
  );
}

export default EditBeer;
