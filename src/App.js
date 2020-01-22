import React, {useState} from 'react';


function App() {

const [characters, setChracters] = useState([]);


  return (
    <div className="App">
      <button className='add'>
        Add
      </button>
    </div>
  );
}

export default App;