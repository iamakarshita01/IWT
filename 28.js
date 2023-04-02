function greeting() {
    // Get the current time
    const now = new Date();
    const hour = now.getHours();

    // Get the user's name from a prompt
    const name = prompt("Hey! What's your name?");

    // Set the greeting message based on the time of day
    let message;
    if (hour >= 0 && hour < 12) {
    message = `Good morning, ${name}!`;
    } else if (hour >= 12 && hour < 18) {
    message = `Good afternoon, ${name}!`;
    } else {
    message = `Good evening, ${name}!`;
    }

    // Create a div element to display the message
    const greeting = document.createElement("div");
    greeting.textContent = message;
    greeting.style.fontSize = "24px";
    greeting.style.padding = "10px";
    greeting.style.backgroundColor = "#eee";
    greeting.style.cursor = "pointer";

    // Hide the message when clicked
    greeting.addEventListener("click", function() {
    greeting.style.display = "none";
    });

    // Add the greeting to the body of the webpage
    document.body.appendChild(greeting);
}