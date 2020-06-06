window.onload = function () {
    console.log('Dokument geladen');
    (function set_canvas(){
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width  = 600;
        canvas.height = 600; 
    }());
     
}


//
//ar test = new Linie(new Punkt(0,0), new Punkt(1,1));
//
//est.say_line();