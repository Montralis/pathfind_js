class Person {

   constructor(startpunkt,zielpunkt){
        this.currentpoint = startpunkt;
        this.zielpunkt = zielpunkt;
        this._dx = 0;
        this._dy = 0;
        this.berechen_startrichtung();
    }
    set_currentpoint(point){
        this.currentpoint = point;
    }
    get_currentpoint(){
        return this.currentpoint;
    }
//------------------------------
    get dy() {
        return this._dy;
    }
    get dx() {
        return this._dx;
    }
    set dx(value) {
        this._dx = value;
    }
    set dy(value) {
        this._dy = value;
    }
//--------------------------

    berechen_startrichtung(){
        var x = this.currentpoint.get_x();
        var y = this.currentpoint.get_y();

        try{
            if(board[x+1][y] == 0){
                this._dx = 1;
                return;
            }
            if(board[x][y+1] == 0){
                this._dy = 1;
                return;
            }
            throw "Der Start ist eingemauert.";
        }catch (e) {
            console.log(e);
        }
    }

    ziel_erreicht(){
       var test =  this.currentpoint.get_x() === this.zielpunkt.get_x() && this.currentpoint.get_y() === this.zielpunkt.get_y();
       return test;
    }
    schritt(){
        board[ this.currentpoint.get_x()][ this.currentpoint.get_y()] = 2;
        this.currentpoint.set_x+= this._dx;
        this.currentpoint.set_y += this._dy;
        board[ this.currentpoint.get_x()][ this.currentpoint.get_y()] = 3;
    }
}