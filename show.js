var board;
window.onload = function () {
    console.log('Dokument geladen');
    (function set_canvas(){
        var canvas = document.getElementsByTagName('canvas')[0];
        canvas.width  = 600;
        canvas.height = 600; 
    }());
     
    initBoard();
      
}
function get2DArray(cols,rown) {
   var arr = new Array(cols);
   for(var i =0; i < arr.length;i++){
      arr[i] = new Array(rown);
   }
   return arr;
}

function default_init_array(arry, defalut_value) {

   for(var x = 0; x < arry.length; x++){    
      for(var y = 0; y < arry[0].length; y++){ 
          arry[x][y] =defalut_value;    
      }    
  }
  return arry;
}

function initBoard()
{
   board = get2DArray(30,30);
   default_init_array(board, 0);


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
   console.log(board);

    for(i = 0; i < 30; i++)
      for(j = 0; j < 30; j++)
        drawOnePoint(i, j, board[i][j]);      
}

function drawOnePoint(i, j, val)
{
    var canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');

    ctx.fillRect(i*20+10,j*20+10,1,1); 
}
