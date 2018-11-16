import React from 'react';
import BeerList from './BeerList';
import PropTypes from './PropTypes';

const editStyles = {
  width: '450px',
  margin: '0 auto',
  textAlign: 'center'
};


function EditBeer( { masterKegList, editKegStatus }) {
  return (
    <div style={editStyles}>
      <h1><em>Edit</em> Existing Keg</h1>
      <BeerList masterKegList={masterKegList}
        editKeg={editKegStatus}
      />
    </div>
  );
}

EditBeer.PropTypes = {
  masterKegList: PropTypes.array,
  editKegStatus: PropTypes.boolean
};

export default EditBeer;
