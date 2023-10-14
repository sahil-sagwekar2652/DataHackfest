# DataHackfest
Pertains to the October 2023 MLH DataHackfest.

As of 8:44 PM PST on OCTOBER 13, 2023:
This repository contains a rough draft of the .HTML, .CSS, .JS, and .PNG logo "DragonPiece" files.
The function is not actively attached to the backend development. This is effectively a mockup (at the least) which should work in browser. 

Note for backend engineers (script included in .HTML file):
    
    // You would need to replace this function with actual video generation using an API.
    function generateVideo() {
            const selectedCharacters = Array.from(document.getElementById('characters').selectedOptions).map(option => option.value);
            const scenario = document.getElementById('scenario').value;

            // Placeholder for video generation using AI
            const videoUrl = generateVideoUsingAI(selectedCharacters, scenario);

            // Display the generated video on the page
            const outputVideo = document.getElementById('output-video');
            outputVideo.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
        }

        // Replace this function with a real API call to generate a video
        function generateVideoUsingAI(characters, scenario) {
            // This is a placeholder for the actual API call
            // You would send the characters and scenario to your AI service
            // and receive a URL to the generated video in response.
            // For example, you might use fetch() to make an API request.
            // This is highly simplified.
            return "https://example.com/generated-video.mp4";
        }


The HTML/CSS/JS markup was tested in Mozilla Firefox 118.0.2 (64-bit).
