import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

const beerListStyles = {
  width: '80%',
  maxWidth: '1024px', 
  minWidth: '400px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
};

function BeerList({ masterKegList, editKegStatus }) {
  return (
    <div style={beerListStyles}>
      {masterKegList.map((keg, index) =>
        <Beer beerName={keg.beerName}
          brand={keg.brand}
          color={keg.color}
          abv={keg.abv}
          price={keg.price}
          status={keg.status}
          key={index}
          editKegStatus={editKegStatus}
        />
      )}
    </div>
  );
}

Beer.propTypes = {
  masterKegList: PropTypes.array,
  editKegStatus: PropTypes.bool
};

export default BeerList;



