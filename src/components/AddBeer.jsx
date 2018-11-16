import React from 'react';

const addStyles = {
  width: '450px',
  margin: '0 auto',

  marginBottom: '60px',
};

const padding = {
  padding: '5px',
  border: 'none',
  outline: 'none',
  borderBottom: '1px solid black',
  margin: '8px'
};


function AddBeer() {
  return (
    <div style={addStyles}>
      <h1><em>Add</em> New Keg</h1>
      <input style={padding} placeholder="Beer Name: "></input>
      <input style={padding} placeholder="Brewery: "></input>
      <input style={padding} placeholder="Price: "></input>
      <input style={padding} placeholder="Pints Remaining in Keg: "></input>
      <input style={padding} placeholder="Beer Color: "></input>
      <button>Add Keg to List</button>
      <style jsx>{`
        button {
          margin-left: 5px;
          border-radius: 5px;
          background-color: white;
          outline: none;
          border: 1px solid black;
          padding: 6px;
          padding-left: 10px;
          padding-right: 10px;
          margin-left: 7px;
          width: 172px;
        }
        .button:hover {
          background-color: whitesmoke;
        }
        svg {
          z-index: 1;
        }
        `}</style>
    </div>
  );
}

export default AddBeer;
