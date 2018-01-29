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
var ckPicl = [];
var ckPicr = [];
var hitPicl = [];
var hitPicr = [];
var jumpPicl = [];
var jumpPicr = [];
var standPicl = [];
var standPicr = [];
var skillPicl = [];
var skillPicr = [];
var ck;
var seed;
var mx;
var my;
var jsPic  = [];
var js;
var data;
var fzPic;
var fz;
var yprPic;
var ypr;
var ypbPic;
var yb;
var szPic;
var sz;
var zbPic;
var zb;
var ypyPic;
var ypy;
var xzPic;
var xz;
var boss1;
var boss1lPic = [];
var boss1rPic = [];
var boss2;
var boss2lPic = [];
var boss2rPic = [];
var seed1;
var keyPressCounter = 0;
var fire;
var firePic = [];
var flash;
var flashPic = [];
var pkq;
var pkqPicl = [];
var pkqPicr = [];
var chick;
var chickPicl = [];
var chickPicr = [];
var boobom;
var boobomPicl = [];
var boobomPicr = [];
var win;
var winPic = [];
var banana;
var bananaPicl = [];
var bananaPicr = [];
var level;
var levelPic = [];
var fireLogo;
var hitLogo;
var jumpLogo;
var flashLogo;
var pkqLogo;
var chickLogo;
var winLogo;
var bananaLogo;
var js;
var jsPicl = [];
var jsPicr = [];
var mbPic;
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
    bg.src = "./img/bg.jpg";
    ck = new ckObj();
    ck.init();
    can2.addEventListener("click", onClick, false);

    if (document.addEventListener) {
        document.addEventListener("keydown", fireFoxMove, true);
    } else {
        document.attachEvent("onkeydown", ieMove);
    }
    if (document.addEventListener) {
        document.addEventListener("keyup", fireFoxStop, true);
    } else {
        document.attachEvent("onkeyup", ieStop);
    }
    for (var i = 0; i < 8; i++) {
        ckPicl[i] = new Image();
        ckPicl[i].src = "./img/ninjia/runl/runl" + i + ".png";
    }
    for (var i = 0; i < 8; i++) {
        ckPicr[i] = new Image();
        ckPicr[i].src = "./img/ninjia/runr/runr" + i + ".png";
    }
    for (var i = 0; i < 5; i++) {
        hitPicl[i] = new Image();
        hitPicl[i].src = "./img/ninjia/hitl/hitl" + i + ".png";
    }
    for (var i = 0; i < 5; i++) {
        hitPicr[i] = new Image();
        hitPicr[i].src = "./img/ninjia/hitr/hitr" + i + ".png";
    }
    for (var i = 0; i < 8; i++) {
        jumpPicl[i] = new Image();
        jumpPicl[i].src = "./img/ninjia/jumpl/jumpl" + i + ".png";
    }
    for (var i = 0; i < 8; i++) {
        jumpPicr[i] = new Image();
        jumpPicr[i].src = "./img/ninjia/jumpr/jumpr" + i + ".png";
    }
    for (var i = 0; i < 8; i++) {
        standPicl[i] = new Image();
        standPicl[i].src = "./img/ninjia/standl/standl" + i + ".png";
    }
    for (var i = 0; i < 8; i++) {
        standPicr[i] = new Image();
        standPicr[i].src = "./img/ninjia/standr/standr" + i + ".png";
    }
    for (var i = 0; i < 6; i++) {
        skillPicl[i] = new Image();
        skillPicl[i].src = "./img/ninjia/skilll/skilll" + i + ".png";
    }
    for (var i = 0; i < 6; i++) {
        skillPicr[i] = new Image();
        skillPicr[i].src = "./img/ninjia/skillr/skillr" + i + ".png";
    }
    for (var i = 0; i < 4; i++) {
        firePic[i] = new Image();
        firePic[i].src = "./img/fire/fire" + i + ".png";
    }
    fire = new fireObj();
    fire.init();
    for (var i = 0; i < 4; i++) {
        flashPic[i] = new Image();
        flashPic[i].src = "./img/flash/flash" + i + ".png";
    }
    flash = new flashObj();
    flash.init();
    for (var i = 0; i < 13; i++) {
        chickPicl[i] = new Image();
        chickPicl[i].src = "./img/chickl/chickl" + i + ".png";
    }
    for (var i = 0; i < 13; i++) {
        chickPicr[i] = new Image();
        chickPicr[i].src = "./img/chickr/chickr" + i + ".png";
    }
    chick = new chickObj();
    chick.init();
    for (var i = 0; i < 4; i++) {
        pkqPicl[i] = new Image();
        pkqPicl[i].src = "./img/pkql/pkql" + i + ".png";
    }
    for (var i = 0; i < 4; i++) {
        pkqPicr[i] = new Image();
        pkqPicr[i].src = "./img/pkqr/pkqr" + i + ".png";
    }
    pkq = new pkqObj();
    pkq.init();
    data = new dataObj();
    for (var i = 0; i < 13; i++) {
        boobomPicl[i] = new Image();
        boobomPicl[i].src = "./img/booboml/booboml" + i + ".png";
    }
    for (var i = 0; i < 13; i++) {
        boobomPicr[i] = new Image();
        boobomPicr[i].src = "./img/boobomr/boobomr" + i + ".png";
    }
    boobom = new boobomObj();
    boobom.init();
    for (var i = 0; i < 4; i++) {
        winPic[i] = new Image();
        winPic[i].src = "./img/win/win" + i + ".png";
    }
    win = new winObj();
    win.init();
    for (var i = 0; i < 10; i++) {
        bananaPicr[i] = new Image();
        bananaPicr[i].src = "./img/bananar/bananar" + i + ".png";
    }
    for (var i = 0; i < 10; i++) {
        bananaPicl[i] = new Image();
        bananaPicl[i].src = "./img/bananal/bananal" + i + ".png";
    }
    banana = new bananaObj();
    banana.init();
    for (var i = 0; i < 10; i++) {
        levelPic[i] = new Image();
        levelPic[i].src = "./img/level/level" + i + ".png";
    }
    level = new levelObj();
    level.init();
    fireLogo = new Image();
    fireLogo.src = "./img/fire/logo.png";
    hitLogo = new Image();
    hitLogo.src = "./img/logo/hit.png";
    jumpLogo = new Image();
    jumpLogo.src = "./img/logo/jump.png";
    flashLogo = new Image();
    flashLogo.src = "./img/logo/flash.png";
    pkqLogo = new Image();
    pkqLogo.src = "./img/logo/pkq.png";
    chickLogo = new Image();
    chickLogo.src = "./img/logo/chick.png";
    winLogo = new Image();
    winLogo.src = "./img/logo/win.png";
    bananaLogo = new Image();
    bananaLogo.src = "./img/logo/banana.png";
    yprPic = new Image();
    yprPic.src = "./img/ypr.png";
    ypr = new yprObj();
    ypr.init();
    ypbPic = new Image();
    ypbPic.src = "./img/ypb.png";
    ypb = new ypbObj();
    ypb.init();
    ypyPic = new Image();
    ypyPic.src = "./img/ypy.png";
    ypy = new ypbObj();
    ypy.init();
    for (var i = 0; i < 7; i++) {
        jsPicl[i] = new Image();
        jsPicl[i].src = "./img/jsl/jsl" + i + ".png";
    }
    for (var i = 0; i < 7; i++) {
        jsPicr[i] = new Image();
        jsPicr[i].src = "./img/jsr/jsr" + i + ".png";
    }
    js = new jsObj();
    js.init();
    mbPic = new Image();
    mbPic.src = "./img/mb.png";
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
    ck.draw();
    pkq.draw();
    flash.draw();
    fire.draw();
    chick.draw();
    boobom.draw();
    win.draw();
    banana.draw();
    level.draw();
    data.draw();
    jsControl();
    js.draw();
    hurt();
    hit();

}


function fireFoxMove(evt){
    if(!data.gameover){
        if(evt.keyCode==37) {
            ck.moveLeft();
        }
        if(evt.keyCode==38&&ck.onGround){
            ck.moveUp();
        }
        if(evt.keyCode==39){
            ck.moveRight();
        }
        if(evt.keyCode==40&&ck.onGround){
            ck.moveDown();
        }
        if(evt.keyCode==32){
            sentseed();
        }
        if(evt.keyCode==88){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.hiting();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==65){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.flashing();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==67&&!ck.jump &&ck.onGround){
            ck.jumping();
        }
        if(evt.keyCode==90){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.skilling();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==83){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.pkqing();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==68){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.chicking();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==70){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.wining();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==71){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.bananaing();
            }else {
                keyPressCounter = 0;
            }

        }
     }
}

function ieMove(evt){
    if(!data.gameover){
        if(evt.keyCode==37) {
            ck.moveLeft();
        }
        if(evt.keyCode==38){
            ck.moveUp();
        }
        if(evt.keyCode==39){
            ck.moveRight();
        }
        if(evt.keyCode==40){
            ck.moveDown();
        }
        if(evt.keyCode==32){
            sentseed();
        }
        if(evt.keyCode==88){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.hiting();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==65){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.flashing();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==67&&!ck.jump &&ck.onGround){
            ck.jumping();
        }
        if(evt.keyCode==90){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.skilling();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==83){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.pkqing();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==68){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.chicking();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==70){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.wining();
            }else {
                keyPressCounter = 0;
            }

        }
        if(evt.keyCode==71){
            keyPressCounter++;
            if(keyPressCounter==1){
                ck.bananaing();
            }else {
                keyPressCounter = 0;
            }

        }
     }
}

function fireFoxStop(evt){
    if(!data.gameover){
    if(evt.keyCode==37) {
        ck.stopLeft();
    }
    if(evt.keyCode==38){
        ck.stopUp();
    }
    if(evt.keyCode==39){
        ck.stopRight();
    }
    if(evt.keyCode==40){
        ck.stopDown();
    }

     }
}

function ieStop(evt){
    if(!data.gameover){
    if(evt.keyCode==37) {
        ck.stopLeft();
    }
    if(evt.keyCode==38){
        ck.stopUp();
    }
    if(evt.keyCode==39){
        ck.stopRight();
    }
    if(evt.keyCode==40){
        ck.stopDown();
    }

     }
}
function onClick(e) {
    if (!data.gameOver) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }
}
