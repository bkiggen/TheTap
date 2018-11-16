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

function Admin({ masterKegList, editKegStatus }) {
  return (
    <div style={containerStyles}>
      <AddBeer/>
      <EditBeer      masterKegList={masterKegList}
        editKegStatus='true'
      />
    </div>
  );
}

Admin.PropTypes = {
  masterKegList: PropTypes.array,
  editKegStatus: PropTypes.bool
};


export default Admin;
