class Person {

   constructor(startpunkt,zielpunkt){
        this.startpunkt = startpunkt;
        this.zielpunkt = zielpunkt;
        this.steps = 0;
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



    step() {
        if (this.steps === 0) { //Hier ist der Start
            this.set_n(this.startpunkt.get_x(), this.startpunkt.get_y(), 1);
            this.steps++;
            return true;
        }

        var found = false;
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === this.steps)
                   if(this.set_n(i, j, this.steps + 1))
                       found = true;
            }
        }
        this.steps++;
        return found;

   }

    set_n(x,y,pos){
       var found = false;
        if(board[x+1][y] === 0){
            board[x+1][y] = pos;
            found = true;
        }

        if(board[x-1][y] === 0){
            board[x-1][y] = pos;
            found = true;
        }
        if(board[x][y+1] === 0){
            board[x][y+1] = pos;
            found = true;
        }

        if(board[x][y-1] === 0){
            board[x][y-1] = pos;
            found = true;
        }
        return found;
    }

    ziel_gefunden(){
        this.steps--;
       var x = this.zielpunkt.get_x();
       var y = this.zielpunkt.get_y();
       if(board[x+1][y] === this.steps)
           return true;
        if(board[x-1][y] === this.steps)
            return true;
        if(board[x][y+1] === this.steps)
            return true;
        if(board[x][y-1] === this.steps)
            return true;
        return false;
    }

}