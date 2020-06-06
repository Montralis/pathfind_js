class Linie {

    constructor(startpunkt, endpunkt) {
        this.startpunkt = startpunkt;
        this.endpunkt = endpunkt;
    }

    say_line() {
        alert("Die Linie geht von " + this.startpunkt.say_point() + " nach "+this.endpunkt.say_point());
    }

    get_startpunkt(){
        return this.startpunkt;
    }
    get_endpunkt(){
        return this.endpunkt;
    }

}