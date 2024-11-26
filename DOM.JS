function displaySum(H, S) {
    // Calculate the sum
    const sum = H + S;

    // Select the container where the result will be displayed
    const container = document.getElementById("result-container");

    // Clear any previous result (if needed)
    container.innerHTML = "";

    // Create an h1 element
    const resultElement = document.createElement("h1");

    // Set the text content of the h1 element
    resultElement.innerText = `The answer for adding ${H} and ${S} is ${sum}.`;

    // Append the h1 element to the container
    container.appendChild(resultElement);
}

// Example usage
displaySum(5, 5);
