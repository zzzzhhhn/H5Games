/**
 * Created by Zora on 2017/2/10.
 */
var can1;
var ctx1;
var can2;
var ctx2;
var bg;
var W;
var H;
var drawBg;
var big;
var bigEye = [];
var bigBody= [];
var bigTail= [];
var lasttime;
var deltaTime;
var bubble;
var ane;
var dust;
var dustPic = [];
var mx;
var my;
var data;
var sm;
var smPic;
document.body.onload = game();
$(document).ready(function () {
    $("#btn").click(function () {
        game();
    })
});
function game()
{
    lasttime = Date.now();
    deltaTime = 0;
    init();
    gameloop();
}


function init() {
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');
    can2.addEventListener("click",onClick,false);
    bg   = new Image();
    bg.src = "./src/background.jpg";
    W    = can1.width;
    H    = can1.height;
    bubble = new bubbleObj();
    bubble.init();
    ane = new aneObj();
    ane.init();
    dust = new dustObj();
    dust.init();
    data = new dataObj();

    drawBg = function() {
        ctx1.drawImage(bg,0,0,W,H);
    }
    big = new bigObj();
    big.init();
    smPic = new Image();
    smPic.src = "src/sm0.png";
    sm = new smObj();
    sm.init();
    for(var i=0;i<2;i++){
        bigEye[i] = new Image();
        bigEye[i].src= "./src/bigEye" + i + ".png";
    }
    for(var i=0;i<16;i++){
        bigBody[i] = new Image();
        bigBody[i].src = "./src/bigSwim" + i + ".png";
    }
    for(var i=0;i<8;i++){
        bigTail[i] = new Image();
        bigTail[i].src = "./src/bigTail" + i + ".png";
    }
    for(var i=0;i<7;i++){
        dustPic[i] =new Image();
        dustPic[i].src = "./src/dust"+ i + ".png";
    }
}

function gameloop() {
    window.requestAnimationFrame(gameloop);
    deltaTime = Date.now() - lasttime;
    if(deltaTime > 40){
        deltaTime = 40 ;
    }
    lasttime = Date.now();
    ctx2.clearRect(0,0,W,H);
    drawBg();
    bigControl();
    big.draw();
    numControl();
    bubble.draw();
    ane.draw();
    dust.draw();
    clickBubble();
    clickSm();
    data.draw();
    smControl();
    sm.draw();

}

function onClick(e) {
    if(!data.gameover){
        if(e.offsetX || e.layerX){
            mx = e.offsetX==undefined ? e.layerX : e.offsetX;
            my = e.offsetY==undefined ? e.layerY : e.offsetY;
        }
    }

}