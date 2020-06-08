let walker;

function start(punkt, zielpunkt) {
    ctx.fillStyle = "green";
    ctx.fillRect(punkt.get_x()*20+10,punkt.get_y()*20+10,5,5);
    ctx.fillStyle = "red";
    ctx.fillRect(zielpunkt.get_x()*20+10,zielpunkt.get_y()*20+10,5,5);
    board[punkt.get_x()][punkt.get_y()] = -1;
    board[zielpunkt.get_x()][zielpunkt.get_y()] = -2;

    walker = new Person(punkt,zielpunkt);

   while (walker.step());
    console.log(board);
    if(walker.ziel_gefunden())
        console.log("Ziel gefunden");
    else
        console.log("Ziel nicht gefunden");

    paint_path();
}
function paint_path() {
  bo
}
