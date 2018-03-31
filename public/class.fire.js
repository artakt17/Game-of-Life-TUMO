class Fire extends Supers {
    constructor(x, y, ind, ) {
        super(x, y, ind, 15);

    }

    mul() {

        this.multiply++;
        if (this.multiply == 1) {
            var emptyCord = this.getDirections(0,1,2,3,4,5);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norFire = new Fire(x, y, this.index);
                fireArr.push(noeFire);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }

    }

    move() {
        return false;
    }


}