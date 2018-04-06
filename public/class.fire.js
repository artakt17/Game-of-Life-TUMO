class Fire extends Supers {
    constructor(x, y, ind, ) {
        super(x, y, ind, 15);

    }

    mul() {
        this.multiply++;
        if (this.multiply >= 0) {
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            var emptyCord = this.getDirections(getRandomInt(5));

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norFire = new Fire(x, y, this.index);
                fireArr.push(norFire);

                matrix[y][x] = 6;
                this.multiply = 0;
            }
        }
        stats.fireMulCount++;

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
                break;
            }
        }
    }

    move() {
        return false;
    }


}