class Punkt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    say_point() {
        var ausgabe = this.x + "," + this.y;
        return ausgabe;
    }

    get_x(){
        return this.x;
    }
    get_y(){
        return this.y;
    }
    setx(x){
        this.x = x;
    }
    sety(y){
        this.y = y;
    }
}