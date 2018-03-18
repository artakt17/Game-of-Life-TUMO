var matrix = []
var side = 8;
var xotArr = [];
var eatArr = [];
var gishArr = [];
var vorsArr = [];


var bardz = 100;
var layn = 100;
var grassCount = 500;
var eatgrassCount = 150;
var gishCount = 100;
var vorsCount = 40;
var matrix = [];

for (var i = 0; i < bardz; i++) {
    matrix.push([]);
    for (var j = 0; j < layn; j++) {
        matrix[i].push(0);
    }
}



function setup() {

    for (var i = 0; i < grassCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 1;
    }
    for (var i = 0; i < eatgrassCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 2;
    }
    for (var i = 0; i < gishCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 3;
    }
    for (var i = 0; i < vorsCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 4;
    }







    noStroke()
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }
            else if (matrix[i][j] == 3) {
                var gish = new gishatich(j, i, 3);
                gishArr.push(gish);
            }
            else if (matrix[i][j] == 4) {
                var vors = new vorsord(j, i, 4);
                vorsArr.push(vors);
            }
        }
    }

}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('black');
                rect(j * side, i * side, side, side);
            }
        }
    }



    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in gishArr) {
        gishArr[i].eat();

    }
    for (var i in vorsArr) {
        vorsArr[i].kill();

    }
}