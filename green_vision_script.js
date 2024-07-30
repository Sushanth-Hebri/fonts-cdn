// Define the API URL variable
const green_vision_api_url = 'https://sushanthh2.pythonanywhere.com';

// Create a style element to add CSS for the fixed div
const style = document.createElement('style');
style.textContent = `
    #greenVisionDiv {
        position: fixed;
        bottom: 20px; /* Distance from the bottom */
        right: 20px; /* Distance from the right */
        background-color: rgba(76, 175, 80, 0.9); /* Green background */
        color: white; /* Text color */
        padding: 10px 20px; /* Padding */
        border-radius: 5px; /* Rounded corners */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Shadow */
        font-size: 16px; /* Font size */
        z-index: 1000; /* High z-index to stay on top */
    }
`;
document.head.appendChild(style); // Append the style to the head

// Create a div element
const greenVisionDiv = document.createElement('div');
greenVisionDiv.id = 'greenVisionDiv'; // Set the ID
greenVisionDiv.textContent = "Hebri's Green Vision"; // Set the text content

// Append the div to the body
document.body.appendChild(greenVisionDiv);
