import React from 'react';

const addStyles = {
  width: '450px',
  margin: '0 auto'
};


function AddBeer() {
  return (
    <div style={addStyles}>
    <h1>Add New Beer</h1>
      <input placeholder="Beer Name: "></input>
      <input placeholder="Brewery: "></input>
      <input placeholder="Price: "></input>
      <input placeholder="Pints Remaining in Keg: "></input>
      <input placeholder="Beer Color: "></input>
    </div>
  )
}

export default AddBeer;
