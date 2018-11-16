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

function Admin({ masterKegList, editKegStatus }) {
  return (
    <div style={containerStyles}>
      <AddBeer/>
      <EditBeer masterKegList={masterKegList}
        editKegStatus={editKegStatus}
      />
    </div>
  );
}

export default Admin;
