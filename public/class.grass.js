class Grass extends Supers {
    constructor(x, y, ind) {
        super(x, y, ind, 3);
    }


    mul() {
        var mulcount = 3;
        if (frameCount <= 20) {
            mulcount = 3;
        }
        else if (frameCount >= 21 && frameCount <= 40) {
            mulcount = 10;
        }
        else {
            frameCount === 0;
        }
        this.multiply++;
        if (this.multiply == mulcount) {
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
        stats.grassMulCount++;
    }

    move() {
        return false;
    }


}
