import React from 'react';


const editStyles = {
  width: '450px',
  margin: '0 auto'
};

const padding = {
  margin: '5px',
  padding: '5px'
};

function EditBeer() {
  return (
    <div style={editStyles}>
      <h1>Edit Beer</h1>
      <input style={padding} placeholder="Beer Name: "></input>
      <input style={padding} placeholder="Brewery: "></input>
      <input style={padding} placeholder="Price: "></input>
      <input style={padding} placeholder="Pints Remaining in Keg: "></input>
      <input style={padding} placeholder="Beer Color: "></input>
    </div>
  );
}

export default EditBeer;
