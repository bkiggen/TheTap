import React from 'react';


const editStyles = {
  width: '450px',
  margin: '0 auto'
};

function EditBeer() {
  return (
    <div style={editStyles}>
      <h1>Edit Beer</h1>
      <input placeholder="Beer Name: "></input>
      <input placeholder="Brewery: "></input>
      <input placeholder="Price: "></input>
      <input placeholder="Pints Remaining in Keg: "></input>
      <input placeholder="Beer Color: "></input>
    </div>
  );
}

export default EditBeer;
