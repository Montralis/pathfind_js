
var board = [30][30];

window.onload = function () {
    console.log('Dokument geladen');
    (function set_canvas(){
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width  = 600;
        canvas.height = 600; 
    }());
     
    initBoard();
      
}

function initBoard()
{
   for(i = 0; i < 30; i++)
      for(j = 0; j < 30; j++)
         board[i][j] = 0;

   for(i = 0; i < 10; i++)
      board[13][29-i] = 1;  // Mauer von oben nach unten (von Rand oben)
   for(i = 0; i < 10; i++)  // von links nach rechts 
      board[i][14] = 1;
   for(i = 0; i < 7; i++)
      board[18][i] = 1;  // Mauer von unten nach oben
   for(i = 0; i < 10; i++)  // von links nach rechts 
      board[29-i][12] = 1;
  
    drawBoard();  
}

function drawBoard()
{
    for(i = 0; i < 30; i++)
      for(j = 0; j < 30; j++)
        drawOnePoint(i, j, board[i][j]);

        
}

function drawOnePoint(i, j, val)
{
    var canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(20*i, 600-20*j);
    ctx.lineTo(20*i+19, 600-20*j);
    ctx.lineTo(20*i+19, 600-20*j);
    ctx.lineTo(0, 150);
    ctx.stroke();

}



//
//ar test = new Linie(new Punkt(0,0), new Punkt(1,1));
//
//est.say_line();