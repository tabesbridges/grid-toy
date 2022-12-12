function getDimension() {
    do {
        input = parseInt(prompt("Enter a number between 16 and 100!", "16"))
    } while (
    (input < 16) || (input > 100)
    );
    return input;
}



function generateGrid() {
    // First, empty out the old grid if it exists
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });

    dimension = getDimension();

    const container = document.querySelector('#container');
    // The idea is to make dim^2 divs and use CSS to space them correctly

    for (i = 0; i < (dimension ** 2); i++) {
        let box = document.createElement('div');
        const box_id = document.createAttribute('class');
        box_id.value = "box";
        box.setAttributeNode(box_id);
        container.appendChild(box);

        // Add event listener to the box
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "purple";

            // reset color after 500ms
            setTimeout(() => {
                event.target.style.backgroundColor = "aqua"
              }, 500);
        }, false);
    }
    return true
}

document.addEventListener("DOMContentLoaded", function() {
    generateGrid();
  });

// Obtain the collection of buttons and extract its only element
button = document.getElementsByTagName('button')[0]

// Upon clicking the button, the user will be prompted to change the dimensions
button.addEventListener("click", generateGrid);
