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

//線を引く関数　引数:現在のX座標,現在のY座標,現在の角度,動く距離
function JSLine(CurrentLocationX,CurrentLocationY,CurrentAngle,MovingDistance){
    var MovingDistanceX = MovingDistance * Math.cos(CurrentAngle / 180 * Math.PI); //三角関数でX軸の移動距離を求める
    var MovingDistanceY = MovingDistance * Math.sin(CurrentAngle / 180 * Math.PI); //三角関数でY軸の移動距離を求める

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
//var UsersCode;
function RunCode(UsersCode){
    eval(UsersCode);
    alert("LI");
}

var Run = document.getElementById('RunButton');
Run.addEventListener("click",function(){eval(document.getElementById('editor').value);});