//your JS code here. If required.
// Function to update the timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const currentDate = new Date();

    // Get the current date and time in a formatted string
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Display the formatted date and time in the 'timer' element
    timerElement.textContent = `${formattedDate} ${formattedTime}`;
}

// Update the timer immediately
updateTimer();

// Update the timer every second (1000 milliseconds)
setInterval(updateTimer, 1000);
