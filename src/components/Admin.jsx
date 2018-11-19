import React from 'react';
import AddBeer from './AddBeer';
import EditBeer from './EditBeer';
import PropTypes from 'prop-types';


const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  margin: '0 auto',
  flexWrap: 'wrap'
};

function Admin({ masterKegList, onAddBeer }) {
  return (
    <div style={containerStyles}>
      <AddBeer
        onAddBeer={onAddBeer}
      />
      <EditBeer      masterKegList={masterKegList}
        editKegStatus='true'
      />
    </div>
  );
}

Admin.PropTypes = {
  masterKegList: PropTypes.array,
  onAddBeer: PropTypes.func
};


export default Admin;
