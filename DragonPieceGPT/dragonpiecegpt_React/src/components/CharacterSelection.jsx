// CharacterSelection.js
import React, { useState } from 'react';
import './Styles.css';

function CharacterSelection() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [scenario, setScenario] = useState('');

  const handleCharacterSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedCharacters(selectedOptions);
  };

  const handleScenarioInput = (e) => {
    setScenario(e.target.value);
  };

  const generateVideo = () => {
    // Implement the video generation logic here
  };

  return (
    <div className="centered-element">
      <label htmlFor="characters" className="centered-element">Select Characters:</label>
      <div className="centered-element select">
        <select
          id="characters"
          className="select select__item"
          multiple
          value={selectedCharacters}
          className="select__item--selected"
          onChange={handleCharacterSelection}
        >
          <option value="character1">Goku</option>
          <option value="character2">Vegeta</option>
          <option value="character3">Krillin</option>
          <option value="character4">Luffy</option>
          <option value="character5">Zoro</option>
          <option value="character6">Sanji</option>
        </select>
      </div>
      <label htmlFor="scenario">Please enter your desired scenario:</label>
      <div className="box">
        <textarea
          id="scenario"
          rows="7"
          cols="110"
          value={scenario}
          onChange={handleScenarioInput}
        ></textarea>
      </div>
      <p>
        <button onClick={generateVideo}>Generate Video</button>
      </p>
    </div>
  );
}

export default CharacterSelection;
