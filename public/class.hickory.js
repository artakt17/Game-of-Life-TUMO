class gishatich extends Supers {
        constructor(x, y, ind,) {
            super(x, y, ind, 60);
        
    
        }


    eat() {

        var gishCord = this.getDirections(2);
        var cord = random(gishCord);

        if (cord) {

            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                    break;
                    this.energy=10;
                }
            }
            if (this.multiply >= 2) {
                this.mul()
                this.multiply = 0;          
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
                //this.energy = 10;
            }
        }
        stats.gishEatCount++;
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norgishatich = new gishatich(x, y, this.index);
            gishArr.push(norgishatich);

            matrix[y][x] = 2;
            this.multiply = 0;
        }
        stats.gishMulCount++;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishArr) {
            if (this.x == gishArr[i].x && this.y == gishArr[i].y) {
                gishArr.splice(i, 1);
                break;
            }
        }
        stats.gishDieCount++;
    }

}