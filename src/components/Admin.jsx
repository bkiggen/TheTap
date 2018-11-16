import React from 'react';
import AddBeer from './AddBeer';
import EditBeer from './EditBeer';
import PropTypes from './PropTypes';


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
        editKegStatus={editKegStatus}
      />
    </div>
  );
}

Admin.PropTypes = {
  masterKegList: PropTypes.array,
  editKegStatus: PropTypes.boolean
};


export default Admin;
