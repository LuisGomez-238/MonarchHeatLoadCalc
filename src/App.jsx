import React, { useState } from 'react';
import Calculator from './Calculator';
import './App.scss';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState(''); 
  const [squareFootage, setSquareFootage] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');

  return (
    <div className="App">
      <h3> Monarch Heat Load Calculation</h3>
      <header className="CustomerInfo">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Square Footage"
          value={squareFootage}
          onChange={(e) => setSquareFootage(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year House Built"
          value={yearBuilt}
          onChange={(e) => setYearBuilt(e.target.value)}
        />
      </header>
      <Calculator squareFootage={squareFootage} yearBuilt={yearBuilt} />
    </div>
  );
}

export default App;
