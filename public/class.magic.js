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
/*
    hrdehel() {
        this.energy++;
        if (this.energy = 5) {
            
        }
        else {
            this.move();
        }


    }
    */
}
