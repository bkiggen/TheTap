import React from 'react';
import BeerList from './BeerList';
import PropTypes from 'prop-types';

const editStyles = {
  width: '450px',
  margin: '0 auto',
  textAlign: 'center'
};


function EditBeer( { masterKegList, currentRouterPath, onEditKeg }) {
  return (
    <div style={editStyles}>
      <h1><em>Edit</em> Existing Keg</h1>
      <BeerList masterKegList={masterKegList}
        onEditKeg={onEditKeg}
        currentRouterPath={currentRouterPath}
      />
    </div>
  );
}

EditBeer.propTypes = {
  masterKegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onEditKeg: PropTypes.func
};

export default EditBeer;
