class Magic {
    constructor(x, y, ind, energy) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 0;

    }

    newDirections() {
        this.directions = [
            [this.x - 5, this.y - 5],
            [this.x - 4, this.y - 5],
            [this.x - 3, this.y - 5],
            [this.x - 2, this.y - 5],
            [this.x - 1, this.y - 5],
            [this.x, this.y - 5],
            [this.x + 1, this.y - 5],
            [this.x + 2, this.y - 5],
            [this.x + 3, this.y - 5],
            [this.x + 4, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x + 5, this.y - 4],
            [this.x + 5, this.y - 3],
            [this.x + 5, this.y - 2],
            [this.x + 5, this.y - 1],
            [this.x + 5, this.y],
            [this.x + 5, this.y + 1],
            [this.x + 5, this.y + 2],
            [this.x + 5, this.y + 3],
            [this.x + 5, this.y + 4],
            [this.x + 5, this.y + 5],
            [this.x + 4, this.y + 5],
            [this.x + 3, this.y + 5],
            [this.x + 2, this.y + 5],
            [this.x + 1, this.y + 5],
            [this.x, this.y + 5],
            [this.x - 1, this.y + 5],
            [this.x - 2, this.y + 5],
            [this.x - 3, this.y + 5],
            [this.x - 4, this.y + 5],
            [this.x - 5, this.y + 5],
            [this.x - 5, this.y + 4],
            [this.x - 5, this.y + 3],
            [this.x - 5, this.y + 2],
            [this.x - 5, this.y + 1],
            [this.x - 5, this.y],
            [this.x - 5, this.y - 1],
            [this.x - 5, this.y - 2],
            [this.x - 5, this.y - 3],
            [this.x - 5, this.y - 4],
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



    
    newMulDirections() {
        this.muldirections = [
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


    getMulDirections(t) {
        this.newMulDirections();
        var found = [];

        for (var i in this.muldirections) {
            var x = this.muldirections[i][0];
            var y = this.muldirections[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.muldirections[i]);

                }
            }
        }
        return found;
    }

    move() {
        var azatCord = 0;
        var xotCord = 1;
        var emptyCord = this.getDirections(azatCord || xotCord);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = this.index;
            if (emptyCord = azatCord) {
                matrix[this.y][this.x] = azatCord;
            }
            else if (emptyCord = xotCord) {
                matrix[this.y][this.x] = xotCord;
            }

            this.x = x;
            this.y = y;

        }
    }

    cratefire() {
        this.energy++;
        if (this.energy >= 10 && fcount >= 0 && fcount <= 30) {


            var emptyCord = this.getMulDirections(0 || 1 || 2 || 3 || 4);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norFire = new Fire(x, y, 5);
                fireArr.push(norFire);

                matrix[y][x] = 6;
                this.multiply = 0;
            }
            this.energy = 0;

        }
        else {
            this.move();
        }


    }

}
