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

function Admin({ masterKegList, onAddBeer, currentRouterPath, onEditKeg }) {

  return (
    <div style={containerStyles}>
      <AddBeer
        onAddBeer={onAddBeer}
      />
      <EditBeer      masterKegList={masterKegList}
        onEditKeg={onEditKeg}
        currentRouterPath={currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  masterKegList: PropTypes.array,
  onAddBeer: PropTypes.func,
  currentRouterPath: PropTypes.string,
  onEditKeg: PropTypes.func
};


export default Admin;
