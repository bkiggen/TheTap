import React from 'react';
import Beer from './Beer';


const  masterKegList = [
  {
    beerName: 'Ruby Zozzle',
    brand: 'Hi-Wheel',
    color: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    status: '20'
  },
  {
    beerName: 'Tart N Juicy',
    brand: 'Epic',
    color: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    status: '60'
  },
  {
    beerName: 'Hamm\'s',
    brand: 'Miller/Coors',
    color: 'American Lager',
    abv: '4.7%',
    price: '3',
    status: '65'
  },
  {
    beerName: 'Prismatic',
    brand: 'Ninkasi',
    color: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    status: '75'
  },
  {
    beerName: 'Juicy Haze',
    brand: 'New Belgium',
    color: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    status: '18'
  },
  {
    beerName: '8 Hop',
    brand: 'New Belgium',
    color: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    status: '58'
  }
];

const beerListStyles = {
  width: '80%',
  border: '1px solid black',
  height: '100vh',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
};
function BeerList() {
  return (
    <div style={beerListStyles}>
      {masterKegList.map((keg, index) =>
        <Beer beerName={keg.beerName}
          brand={keg.brand}
          color={keg.color}
          abv={keg.abv}
          price={keg.price}
          status={keg.status}
          key={index} />
      )}
    </div>
  );
}

export default BeerList;
