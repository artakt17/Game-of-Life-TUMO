var socket = io.connect('http://localhost:3010');

var matrix = []
var side = 8;
var xotArr = [];
var eatArr = [];
var gishArr = [];
var vorsArr = [];
var magArr = [];
var fireArr = [];


var bardz = 80;
var layn = 80;
var grassCount = 400;
var eatgrassCount = 100;
var gishCount = 100;
var vorsCount = 40;
var magCount = 1;
var matrix = [];

var stats = {
    grassMulCount: 0,
    eatgrassMulCount: 0,
    gishMulCount: 0,
    eatgrassDieCount: 0,
    gishDieCount: 0,
    eatgrassEatCount: 0,
    gishEatCount: 0,
    vorsKillCount: 0,
    fireMulCount: 0,
    framecount: 0,
}


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
    for (var i = 0; i < magCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 5;
    }




    var cnv = createCanvas(600, 600);
    noStroke()
    frameRate(30);
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
            else if (matrix[i][j] == 5) {
                var mag = new Magic(j, i, 5);
                magArr.push(mag);
            }
            else if (matrix[i][j] == 6) {
                var fire = new Fire(j, i, 6);
                fireArr.push(fire);
            }
        }
    }

}
 var fcount = 0;
function draw() {
    stats.framecount++;
    fcount++;
    console.log(fcount);
    background('#acacac');

   
    var color = "green";

    if(fcount <= 30){
        color = "green";
    }
    else if(fcount >= 31 && fcount <= 60){
        color = "white";
    }
    else if(fcount >= 61 ){
        fcount = 0;
    }


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {

                fill(color);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("#F66F07");
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
            else if (matrix[i][j] == 5) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill("#FAFA01");
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
    for (var i in magArr) {
        magArr[i].cratefire();

    }
    if (fcount >= 0 && fcount <= 30){
        for (var i in fireArr) {
            fireArr[i].mul();
        }
    }
    if (fcount >= 30 && fcount <= 60){
        for (var i in fireArr) {
            fireArr[i].die();
        }
    }


    if (frameCount % 100 === 0) {
        stats.timestamp = (new Date()).toString();
        stats.framecount = frameCount;
        socket.emit("send data", stats);
    }
}
















