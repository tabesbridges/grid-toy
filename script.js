function getDimension() {
    return 16;
}

function generateGrid() {
    dimension = getDimension();

    // We may want to create row containers and put the divs in them as below,
    // or potentially just make dim^2 divs and use CSS to space them correctly

    for (i = 0; i < dimension; i++) {
        // create a row for each i-value
        for (j = 0; j < dimension; j++) {
            // create an empty div for each j-value
        }
    }
}