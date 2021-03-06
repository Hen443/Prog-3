var side = 25;
var matrix = [];
var socket = io();

var btn = document.getElementById('btn_1')

btn.addEventListener('click', (data) => {
    socket.emit('btn_1', data)
});

socket.on('matrix', function (data) {
    matrix = data;
});



function setup() {
    
    createCanvas(36 * side, 33 * side);
    background('#acacac');
    noStroke()

}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill('blue');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 5) {
                fill('black');
                rect(x * side, y * side, side, side);
            } else {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
        }

    }

}