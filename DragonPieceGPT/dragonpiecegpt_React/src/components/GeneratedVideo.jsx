// GeneratedVideo.js
import React from 'react';

function GeneratedVideo({ videoUrl }) {
  return (
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
  );
}

export default GeneratedVideo;
