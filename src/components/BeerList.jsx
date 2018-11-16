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

function BeerList({ masterKegList, editKeg }) {
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
          editKeg={editKeg}
        />
      )}
    </div>
  );
}

Beer.propTypes = {
  masterKegList: PropTypes.array
};

export default BeerList;



