/**
 * Created by Zora on 2017/2/7.
 */
var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;
var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;
var mom;
var baby;
var mx;
var my;
var babyTail = [];
var bigTail  = [];
var babyEye  = [];
var bigEye   = [];
var babyBody = [];
var bigBodyO = [];
var bigBodyB = [];
var data;
var wave;
var feedwave;
var dust;
var dustPic  = [];
document.body.onload = game;
$(document).ready(function () {
    $("#btn").click(function () {
        game();
    });
    $("#save").click(function () {
        onSaveData();
    });
    $("#show").click(function () {
        showData();
    })
});
function drawCover() {
    var Cover = new Image();
    Cover.src = "./src/cover.png";
}

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}
function init() {
    //获得canvas context
    can1 = document.getElementById('canvas1');
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');
    ctx2 = can2.getContext('2d');

    can1.addEventListener("mousemove",onMouseMove,false);

    bgPic.src = './src/background.jpg';
    canWidth = can1.width;
    canHeight= can1.height;
    ane = new aneObj();
    ane.init();
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();
    data = new dataObj();
    mx = canWidth * 0.5;
    my = canHeight * 0.5;
    wave = new waveObj();
    wave.init();
    feedwave = new feedwaveObj();
    feedwave.init();
    dust = new dustObj();
    dust.init();

    for(var i=0;i<8;i++){
        babyTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
        bigTail[i]  = new Image();
        bigTail[i].src  = "./src/bigTail" + i + ".png";
    }
    for(var i=0;i<2;i++){
        babyEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png";
        bigEye[i]  = new Image();
        bigEye[i].src  = "./src/bigEye" + i + ".png";
    }
    for(var i =0;i<20;i++){
        babyBody[i] = new Image();
        babyBody[i].src = "./src/babyfade" + i + ".png";
    }
    for(var i =0;i<8;i++){
        bigBodyO[i] = new Image();
        bigBodyO[i].src = "./src/bigSwim" + i + ".png";
        bigBodyB[i] = new Image();
        bigBodyB[i].src = "./src/bigSwimBlue" + i + ".png";
    }
    for(var i=0;i<7;i++){
        dustPic[i] = new Image();
        dustPic[i].src = "./src/dust" + i + ".png";
    }
}
function gameloop() {
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime= now -lastTime;
    if(deltaTime > 40){
        deltaTime = 40;
    }
    lastTime= now;
    drawbackground();
    ane.draw();
    countControl();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    baby.draw();
    momcollect();
    feed();
    data.draw();
    wave.draw();
    feedwave.draw();
    dust.draw();

}
function onMouseMove(e) {
    if(!data.gameOver){
        if(e.offsetX || e.layerX){
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }

}
function onSaveData() {
	window.sessionStorage.setItem('score',data.score);
}
function showData() {
    var score = window.sessionStorage.getItem('score');
    alert(score);
}