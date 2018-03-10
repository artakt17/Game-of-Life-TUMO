class vorsord {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 15;

    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }





    move() {

        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }

    kill() {

        var gishCord = this.getDirections(3);
        var xotCord = this.getDirections(2);
        var gcord = random(gishCord);
        var xcord = random(xotCord);

        if (gcord) {

            this.multiply++;

            var x = gcord[0];
            var y = gcord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishArr) {
                if (x == gishArr[i].x && y == gishArr[i].y) {
                    gishArr.splice(i, 1);
                    break;
                }
            }



        }
        else if (xcord) {

            this.multiply++;

            var x = xcord[0];
            var y = xcord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                    break;
                }
            }


        }

        else {
            this.move();
            this.energy--;
            if (this.energy < 3) {

            }
        }
    }

}