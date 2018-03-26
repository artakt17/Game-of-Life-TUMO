class vorsord extends Supers {
    constructor(x, y, ind, ) {
        super(x, y, ind, 15);

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
        stats.vorsKillCount++;
    }



}

