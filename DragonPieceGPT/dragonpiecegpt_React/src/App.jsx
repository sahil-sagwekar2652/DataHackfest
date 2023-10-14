// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import CharacterSelection from './components/CharacterSelection';
import GeneratedVideo from './components/GeneratedVideo';
import './styles/Styles.css';
import logo from './logo.png'

function App() {
  const [videoUrl, setVideoUrl] = useState('');

  // Implement video generation logic and update 'videoUrl' as needed

  return (
    <div>
      <Header />
      <img src={logo} alt="DragonPiece GPT Logo" className="logo-image centered-element" />
      <CharacterSelection className="centered-element select select__item select__item--selected" />
      <GeneratedVideo videoUrl={videoUrl} />
    </div>
  );
}

export default App;
