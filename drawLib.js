var CanvasWidth = 900;
var CanvasHeight =700;

function test(){
$("canvas").drawRect({
  strokeStyle: "black",
  strokeWidth: 1,
  x: 100,
  y: 100,
  width: 100,
  height: 100
});
}

function DrawTurtle(CurrentLocationX,CurrentLocationY){
    $('canvas').drawPolygon({
        strokeStyle: 'black',
        strokeWidth: 2,
        x: CurrentLocationX, y: CurrentLocationY,
        radius: 10,
        sides: 3,
    });
}

//線を引く関数　引数:現在のX座標,現在のY座標,現在の角度,動く距離
function JSLine(CurrentLocationX,CurrentLocationY,CurrentAngle,MovingDistance){
    var MovingDistanceX = MovingDistance * Math.sin(CurrentAngle / 180 * Math.PI); //三角関数でX軸の移動距離を求める
    var MovingDistanceY = -(MovingDistance * Math.cos(CurrentAngle / 180 * Math.PI)); //三角関数でY軸の移動距離を求める

    //JCanvasでの描画
    $("canvas").drawLine({
        strokeStyle: "black",
        strokeWidth: 1,
        x1: CurrentLocationX,
        y1: CurrentLocationY,
        x2: (CurrentLocationX + MovingDistanceX),
        y2: (CurrentLocationY + MovingDistanceY)
    });
}

//ユーザーが入力したコードを実行する関数
function RunCode(UsersCode){
    eval(UsersCode);
}

//Ruボタンのイベントを受け取る変数
var Run = document.getElementById('RunButton');
Run.addEventListener("click",function(){RunCode(document.getElementById('editor').value)});

    var TurtleX = CanvasWidth / 2;
    var TurtleY = CanvasHeight / 2;
    var TurtleAngle = 0;
    
//タートル的なfd挙動を実現するための関数
function FD(MovingDistance){
    
    JSLine(TurtleX,TurtleY,TurtleAngle,MovingDistance);
    TurtleX += MovingDistance * Math.sin(TurtleAngle / 180 * Math.PI);
    TurtleY -= MovingDistance * Math.cos(TurtleAngle / 180 * Math.PI);
    DrawTurtle(TurtleX,TurtleY);
}