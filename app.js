// Calling the createCounter function and assigning the returned function to a variable
const keepCount = createCounter();

function createCounter() {
    let count = 0;
        // The returned function keeps track of a count variable
    return function () {
        count++;
        return count;
    }
}

// Geting the HTML elements with the ids "clickMe" and "countDisplay"
const button = document.getElementById("clickMe");
const display = document.getElementById("countDisplay");

// Adding an event listener to the button element that updates the count display
button.addEventListener("click", () => {
        // Calling the keepCount function to update the display
    display.innerHTML = keepCount();
});
