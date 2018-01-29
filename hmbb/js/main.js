/**
 * Created by Zora on 2017/2/12.
 */
var can1 = document.getElementById('canvas1');
var can2 = document.getElementById('canvas2');
var ctx1 = can1.getContext('2d');
var ctx2 = can2.getContext('2d');

var bg;
var W;
var H;
var lastTime;
var deltaTime;
var hmbb;
var hmbbPic;
var bubble;
var dust;
var dustPic = [];
var ane;
var pdxPic;
var pdx;
var smPic;
var sm;
var smdPic;
var data;
window.document.body.onload = game();

$(document).ready(function () {
   $("#btn").click(function () {
       game();
   })
});
function game() {
    lastTime = Date.now();
    deltaTime= 0;
    init();
    gameLoop();
}

function init() {
    W = can2.width;
    H = can2.height;
    bg = new Image();
    bg.src = "src/background.jpg";

    if(document.addEventListener){
        document.addEventListener("keydown",fireFoxMove, true);
    } else{
        document.attachEvent("onkeydown",ieMove);
    }


    hmbbPic = new Image();
    hmbbPic.src = "src/hmbbcpp0.png";
console.log(typeof hmbbPic)
    hmbb = new hmbbObj();
    hmbb.init();
    bubble = new bubbleObj();
    bubble.init();
    ane = new aneObj();
    ane.init();
    smPic = new Image();
    smPic.src = "src/sm0.png";
    sm = new smObj();
    sm.init();
    data = new dataObj();

    for (var i=0;i<7;i++) {
        dustPic[i] = new  Image();
        dustPic[i].src = "src/dust"+ i + ".png";
    }

    pdxPic = new Image();
    pdxPic.src = "src/pdx0.png";
    pdx = new pdxObj();
    pdx.init();

    dust = new dustObj();
    dust.init();
    smdPic = new Image();
    smdPic.src = "src/sm0.png";
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    deltaTime = Date.now() - lastTime;
    if(deltaTime>40){
        deltaTime = 40;
    }
    lastTime = Date.now();
    ctx1.drawImage(bg,0,0,W,H);
    ctx2.clearRect(0,0,W,H);
    hmbb.draw();
    bubbleControl();
    bubble.draw();
    ane.draw();
    dust.draw();
    pdx.draw();
    smControl();
    sm.draw();
    hit();
    data.draw();
}


function fireFoxMove(evt){
    if(!data.gameover){
        if(evt.keyCode==37) {
            hmbb.moveLeft();
        }
        if(evt.keyCode==38){
            hmbb.jumpUp();
        }
        if(evt.keyCode==39){
            hmbb.moveRight();
        }
        if(evt.keyCode==8){
            hmbb.moveRight();
        }
    }
}

function ieMove(evt){
    if(!data.gameover){
        if(evt.keyCode==37) {
            hmbb.moveLeft();
        }
        if(evt.keyCode==38){
            hmbb.jumpUp();
        }
        if(evt.keyCode==39){
            hmbb.moveRight();
        }
        if(evt.keyCode==8){
            hmbb.moveRight();
        }
    }
}