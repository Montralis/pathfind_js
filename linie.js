class Linie {

    constructor(startpunkt, endpunkt) {
        this.startpunkt = startpunkt;
        this.endpunkt = endpunkt;
    }

    say_line() {
        alert("Die Linie geht von " + this.startpunkt.say_point() + " nach "+this.endpunkt.say_point());
    }

}