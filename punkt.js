class Punkt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    say_point() {
        var ausgabe = this.x + "," + this.y;
        return ausgabe;
    }
}