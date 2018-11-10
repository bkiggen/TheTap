import React from 'react';

const addStyles = {
  width: '450px',
  margin: '0 auto'
};

const padding = {
  margin: '5px',
  padding: '5px'
};


function AddBeer() {
  return (
    <div style={addStyles}>
      <h1>Add New Beer</h1>
      <input style={padding} placeholder="Beer Name: "></input>
      <input style={padding} placeholder="Brewery: "></input>
      <input style={padding} placeholder="Price: "></input>
      <input style={padding} placeholder="Pints Remaining in Keg: "></input>
      <input style={padding} placeholder="Beer Color: "></input>
    </div>
  );
}

export default AddBeer;
