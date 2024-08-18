// Random Background Generator
const colorGenerator = document.getElementById('colorGenerator');
const colorValue = document.getElementById('bg-color-name');

// Event Listener
colorGenerator.addEventListener('click', colorUpdate);

// Function to randomly change background
function colorUpdate() {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colorValue.textContent = color;
        document.body.style.backgroundColor = color;
    }
