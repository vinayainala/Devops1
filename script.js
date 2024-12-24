// Select the button and heading elements
const colorButton = document.getElementById('colorButton');
const heading = document.getElementById('heading');

// Function to change the color of the heading text
function changeTextColor() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    heading.style.color = randomColor; // Apply the random color to the heading
}

// Add an event listener to the button
colorButton.addEventListener('click', changeTextColor);
