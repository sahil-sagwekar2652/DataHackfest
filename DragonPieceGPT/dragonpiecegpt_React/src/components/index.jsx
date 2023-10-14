import React, { useState } from 'react';

function DragonPiece() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [scenario, setScenario] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const generateVideo = () => {
    // Simulate generating a video URL using AI (replace with your actual implementation)
    const videoUrl = generateVideoUsingAI(selectedCharacters, scenario);
    setVideoUrl(videoUrl);
  };

  const generateVideoUsingAI = (characters, scenario) => {
    // Simulate an API call to generate a video URL (replace with your actual API call)
    return 'https://example.com/generated-video.mp4';
  };

  return (
    <div className="center">
      <h1>
        <a href="/">
          <img src="DragonPiece.png" style={{ width: '75%' }} alt="DragonPiece GPT" />
        </a>
      </h1>

      <label htmlFor="characters">Select Characters:</label>
      <div className="centered-element">
        <select
          id="characters"
          className="custom-select"
          multiple
          value={selectedCharacters}
          onChange={(e) => setSelectedCharacters(Array.from(e.target.selectedOptions, (option) => option.value))}
        >
          <option value="Goku">Goku</option>
          <option value="Vegeta">Vegeta</option>
          <option value="Krillin">Krillin</option>
          <option value="Luffy">Luffy</option>
          <option value="Zoro">Zoro</option>
          <option value="Sanji">Sanji</option>
        </select>
      </div>

      <label htmlFor="scenario">Enter Scenario:</label>
      <div className="box">
        <textarea
          id="scenario"
          rows="7"
          cols="110"
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
        />
      </div>

      <button onClick={generateVideo}>Generate Video</button>

      <div id="output-video">
        {videoUrl && (
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Generated Video"
          />
        )}
      </div>
    </div>
  );
}

export default DragonPiece;

