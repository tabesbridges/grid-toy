// Obtain root, which allows access to CSS variables.
let CSSroot = document.querySelector(':root');

function getDimension() {
    do {
        input = parseInt(prompt("Enter a number between 1 and 100!", "16"))
    } while (
    (input < 1) || (input > 100)
    );
    return input;
}

function generateGrid() {
    // First, empty out the old grid if it exists
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });

    const container = document.querySelector('#container');

    dimension = getDimension();

    // Call the setCSSvar function to update the CSS
    setCSSvar('--box-size', dimension);

    // The idea is to make dim^2 divs distributed equally over dim
    // intermediate divs.
    
    for (i = 0; i < (dimension ** 2); i++) {
        let box = document.createElement('div');
        const box_id = document.createAttribute('class');
        box_id.value = "box";
        box.setAttributeNode(box_id);
        container.appendChild(box);

        // Add event listener to the box (not using CSS variables here
        // since we would need one for each box)
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "purple";

            // reset color after 500ms
            setTimeout(() => {
                event.target.style.backgroundColor = "aqua"
            }, 1000);
        }, false);
    }
}

// Create a function for getting a variable value
function getCSSvar(target) {
    // Get the styles (properties and values) for the root
    var rootStyles = getComputedStyle(CSSroot);
    // return the value of the target variable
    return rootStyles.getPropertyValue(target);
  }

// Create a function for setting a variable value
function setCSSvar(target, newValue) {
    // Set the value of target variable to another value
    CSSroot.style.setProperty(target, newValue);
  }




document.addEventListener("DOMContentLoaded", function() {
    generateGrid();
  });

// Obtain the collection of buttons and extract its only element
button = document.getElementsByTagName('button')[0]

// Upon clicking the button, the user will be prompted to change the dimensions
button.addEventListener("click", generateGrid);
