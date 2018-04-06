class Grass extends Supers {
    constructor(x, y, ind) {
        super(x, y, ind, 3);
    }


    mul() {
        var mulcount = 3;

        if (fcount >= 0 && fcount <= 30) {
            mulcount = 3;
        }
        else if (fcount >= 30 && fcount <= 60) {
            mulcount = 6;
        }
        else if(fcount >= 61 ){
            fcount = 0;
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
