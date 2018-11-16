import React from 'react';
import BeerList from './BeerList';
import PropTypes from 'prop-types';

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
        editKegStatus='true'
      />
    </div>
  );
}

EditBeer.PropTypes = {
  masterKegList: PropTypes.array,
  editKegStatus: PropTypes.bool
};

export default EditBeer;
