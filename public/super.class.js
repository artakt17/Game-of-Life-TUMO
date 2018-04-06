class Supers {
    constructor(x, y, ind, energy) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = energy;

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
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var emptyCord = this.getDirections(getRandomInt(2));
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = this.index;
            if (emptyCord = 0) {
                matrix[this.y][this.x] = 0;
            }
            else if (emptyCord = 1) {
                matrix[this.y][this.x] = 1;
            }



            this.x = x;
            this.y = y;

        }
    }






}
