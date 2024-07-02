document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");

    // Array of fixed positions
    const positions = [
        { top: '20%', left: '15%' },
        { top: '50%', left: '35%' },
        { top: '80%', left: '60%' },
        { top: '30%', left: '75%' },
        { top: '60%', left: '10%' },
        { top: '40%', left: '50%' },
        { top: '70%', left: '30%' },
        { top: '10%', left: '60%' },
        { top: '90%', left: '80%' },
        { top: '50%', left: '90%' }
    ];

    positions.forEach(position => {
        const shape = document.createElement("div");
        shape.classList.add("shape");

        // Apply fixed positions
        shape.style.top = position.top;
        shape.style.left = position.left;

        background.appendChild(shape);
    });
});




// Example Walkthrough

// Let’s say the positions array is:

// javascript
// Copy code
// const positions = [
//     { top: '20%', left: '15%' },
//     { top: '50%', left: '35%' },
//     { top: '80%', left: '60%' }
// ];
// Iteration 1: position is { top: '20%', left: '15%' }

// A new div element is created and assigned the shape class.
// The top style is set to '20%' and left style is set to '15%'.
// The div element is added to the .background container.
// Iteration 2: position is { top: '50%', left: '35%' }

// A new div element is created and assigned the shape class.
// The top style is set to '50%' and left style is set to '35%'.
// The div element is added to the .background container.
// Iteration 3: position is { top: '80%', left: '60%' }

// A new div element is created and assigned the shape class.
// The top style is set to '80%' and left style is set to '60%'.
// The div element is added to the .background container.
// Key Points About position
// Represents: Each position object contains the top and left values for the shape's position.
// Provides: The specific coordinates where each shape should appear within the .background container.
// Accessed: Within the forEach loop, position provides the top and left properties that are used to set the style of each shape.




// Complete Program in Context

// Here’s how position is used within the entire program:


// In summary:

// position: Represents the current object from the positions array containing top and left values.
// forEach: Iterates over the array, allowing you to apply the top and left values to the shapes to position them correctly.
// Visual Summary
// positions Array	forEach Iteration	position Variable	Operations with position
// Array of objects	Iterates each object	{ top: '20%', left: '15%' }	Set top and left styles for shape
// Object Properties	Apply styles	shape.style.top = '20%';	Set top and left for positioning
// Append Shape	Add to Container	background.appendChild(shape);	Display shape in .background
// This JavaScript code effectively uses the position variable to manage and apply styles for a series of shapes, demonstrating how data from an array can be used for dynamic content generation in web development.