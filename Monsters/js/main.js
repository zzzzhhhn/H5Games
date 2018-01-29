/**
 * Created by Zora on 2017/6/2.
 */
var can1 = document.getElementById('canvas1');
var can2 = document.getElementById('canvas2');

var ctx1 = can1.getContext('2d');
var ctx2 = can2.getContext('2d');

var bgPic;
var bg;
var lasttime;
var deltaTime;
var W;
var H;
var grassPic;
var grass;
var farmerF = [];
var farmerB = [];
var farmerL = [];
var farmerR = [];
var farmer;
var maidF = [];
var maidB = [];
var maidL = [];
var maidR = [];
var maid;
var knightF = [];
var knightB = [];
var knightL = [];
var knightR = [];
var knight;

var housePic =[];
var house;
var mx = 0;
var my = 0;
var cx = 0;
var cy = 0;
var dragonLogo;
var fishLogo;
var moguLogo;
var slmLogo;
var panel;
var dragonPicl = [];
var dragonPicr = [];
var dragon;
var moguPicl = [];
var moguPicr = [];
var mogu;
var dragonEgg;
var fishEgg;
var moguEgg;
var slmEgg;
var dragonPlan;
var fishPlan;
var moguPlan;
var slmPlan;
var slmPicl = [];
var slmPicr = [];
var slm;
var fishPicl = [];
var fishPicr = [];
var fish;
var sjPic;
var sj;
var data;
var treePic;
var tree;
var wl;
var js

$(document).ready(function () {
    game();
});


function game() {
    lasttime = Date.now();
    deltaTime = 0;
    init();
    gameLoop();
}

function init() {
    W = can1.width;
    H = can2.height;
    bgPic = new Image();
    bgPic.src = './img/ground.png';
    wl = new Image();
    wl.src = "./img/wl.png";
    bg = new bgObj();
    bg.init();

    grassPic = new Image();
    grassPic.src = './img/grass.png';
    grass = new grassObj();
    grass.init();
    treePic = new Image();
    treePic.src = './img/tree.png';
    tree = new treeObj();
    tree.init();
    for (var i=0;i<4;i++) {
        farmerF[i] = new Image();
        farmerF[i].src = "./img/farmers/font" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        farmerB[i] = new Image();
        farmerB[i].src = "./img/farmers/back" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        farmerL[i] = new Image();
        farmerL[i].src = "./img/farmers/left" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        farmerR[i] = new Image();
        farmerR[i].src = "./img/farmers/right" + i + ".png";
    }
    farmer = new farmerObj();
    farmer.init();
    for (var i=0;i<4;i++) {
        maidF[i] = new Image();
        maidF[i].src = "./img/maids/front" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        maidB[i] = new Image();
        maidB[i].src = "./img/maids/back" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        maidL[i] = new Image();
        maidL[i].src = "./img/maids/left" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        maidR[i] = new Image();
        maidR[i].src = "./img/maids/right" + i + ".png";
    }
    maid = new maidObj();
    maid.init();
    for (var i=0;i<4;i++) {
        knightF[i] = new Image();
        knightF[i].src = "./img/knight/knightf" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        knightB[i] = new Image();
        knightB[i].src = "./img/knight/knightb" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        knightL[i] = new Image();
        knightL[i].src = "./img/knight/knightl" + i + ".png";
    }
    for (var i=0;i<4;i++) {
        knightR[i] = new Image();
        knightR[i].src = "./img/knight/knightr" + i + ".png";
    }
    knight = new knightObj();
    knight.init();
    for(var i=1;i<=5;i++) {
        housePic[i] = new Image();
        housePic[i].src = "./img/house/house" + i + ".png";
    }
    house = new houseObj();
    house.init();
    can2.addEventListener('click',build,false);
    dragonLogo = new Image();
    dragonLogo.src = "./img/logo/dragon.jpg";
    fishLogo = new Image();
    fishLogo.src = "./img/logo/fish.jpg";
    slmLogo = new Image();
    slmLogo.src = "./img/logo/slm.jpg";
    moguLogo = new Image();
    moguLogo.src = "./img/logo/mogu.jpg";
    panel = new panelObj();
    panel.init();
    for(var i=0;i<4;i++) {
        dragonPicl[i] = new Image();
        dragonPicl[i].src = "./img/dragon/dragonl" + i + ".png";
    }
    for(var i=0;i<4;i++) {
        dragonPicr[i] = new Image();
        dragonPicr[i].src = "./img/dragon/dragonr" + i + ".png";
    }
    for(var i=0;i<6;i++) {
        moguPicl[i] = new Image();
        moguPicl[i].src = "./img/mogu/mogul" + i + ".png";
    }
    for(var i=0;i<6;i++) {
        moguPicr[i] = new Image();
        moguPicr[i].src = "./img/mogu/mogur" + i + ".png";
    }
    for(var i=0;i<29;i++) {
        slmPicl[i] = new Image();
        slmPicl[i].src = "./img/slm/slml" + i + ".png";
    }
    for(var i=0;i<29;i++) {
        slmPicr[i] = new Image();
        slmPicr[i].src = "./img/slm/slmr" + i + ".png";
    }
    for(var i=0;i<8;i++) {
        fishPicl[i] = new Image();
        fishPicl[i].src = "./img/fish/fishl" + i + ".png";
    }
    for(var i=0;i<8;i++) {
        fishPicr[i] = new Image();
        fishPicr[i].src = "./img/fish/fishr" + i + ".png";
    }
    dragon = new dragonObj();
    dragon.init();
    dragonEgg = new Image();
    dragonEgg.src = "./img/egg/dragonEgg.png";
    fishEgg = new Image();
    fishEgg.src = "./img/egg/fishEgg.png";
    moguEgg = new Image();
    moguEgg.src = "./img/egg/moguEgg.png";
    slmEgg = new Image();
    slmEgg.src = "./img/egg/slmEgg.png";
    dragonPlan = new Image();
    dragonPlan.src = "./img/plan/dragonPlan.png";
    fishPlan = new Image();
    fishPlan.src = "./img/plan/fishPlan.png";
    moguPlan = new Image();
    moguPlan.src = "./img/plan/moguPlan.png";
    slmPlan = new Image();
    slmPlan.src = "./img/plan/slmPlan.png";
    mogu = new moguObj();
    mogu.init();
    slm = new slmObj();
    slm.init();
    fish = new fishObj();
    fish.init();
    sjPic = new Image();
    sjPic.src = "./img/sj.png";
    sj = new sjObj();
    sj.init();
    data = new dataObj();
    data.init();

}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    deltaTime = Date.now() - lasttime;
    if (deltaTime>=40) {
        deltaTime = 40;
    }
    lasttime = Date.now();
    ctx2.clearRect(0,0,W,H);
    bg.draw();
    grass.draw();

    grassControl();
    treeControl();
    tree.draw();
    farmerControl();
    farmer.draw();
    maidControl();
    maid.draw();
    knightControl();
    knight.draw();
    house.draw();
    dragonControl();
    dragon.draw();
    moguControl();
    mogu.draw();
    fishControl();
    fish.draw();
    slmControl();
    slm.draw();
    sj.draw();
    data.draw();
    panel.draw();
    attact();
}

function build(e) {
    if(e.offsetX || e.layerX){
        mx = e.offsetX==undefined ? e.layerX : e.offsetX;
        my = e.offsetY==undefined ? e.layerY : e.offsetY;
    }
    for(var i=0;i<bg.num;i++)  {
        if(mx>=bg.x[i] && mx<= bg.x2[i] && my >= bg.y[i] && my < bg.y2[i] && !panel.show) {
            cx = bg.x[i];
            cy = bg.y[i];
            panel.x = cx;
            panel.y = cy;
            bg.cbg = i;
            if(!bg.occupied[i]) {
                panel.show = true;
                return;
            }else {
                panel.show = true;
                return;
            }


        }
        if(panel.show &&　!bg.occupied[bg.cbg]) {
            if(mx>=panel.x && mx<= panel.x+100 && my >= (panel.y-100) && my < panel.y) {
                if(data.grassCount >= fish.grassCost && data.sjCount >= fish.sjCost && data.limit < house.limit) {
                    bg.occupied[bg.cbg] = true;
                    fish.limit++;
                    panel.show = false;
                    data.grassCount = data.grassCount - fish.grassCost;
                    data.sjCount = data.sjCount - fish.sjCost;
                    return;
                }
            }
            if(mx>=panel.x && mx<= panel.x+100 && my >= (panel.y+100) && my < panel.y+200) {
                if(data.grassCount >= mogu.grassCost && data.sjCount >= mogu.sjCost && data.limit < house.limit) {
                    bg.occupied[bg.cbg] = true;
                    mogu.limit++;
                    panel.show = false;
                    data.grassCount = data.grassCount - mogu.grassCost;
                    data.sjCount = data.sjCount - mogu.sjCost;
                    return;
                }
            }
            if(mx>=panel.x-100 && mx<= panel.x && my >= panel.y && my < panel.y+100) {
                if(data.grassCount >= slm.grassCost && data.limit < house.limit) {
                    bg.occupied[bg.cbg] = true;
                    slm.limit++;
                    panel.show = false;
                    data.grassCount = data.grassCount - slm.grassCost;
                    return;
                }
            }
            if(mx>=panel.x+100 && mx<= panel.x+200 && my >= panel.y && my < panel.y+100) {
                if(data.grassCount >= dragon.grassCost && data.sjCount >= dragon.sjCost && data.limit < house.limit) {
                    bg.occupied[bg.cbg] = true;
                    dragon.limit++;
                    panel.show = false;
                    data.grassCount = data.grassCount - dragon.grassCost;
                    data.sjCount = data.sjCount - dragon.sjCost;
                    return;
                }
            }
            if(mx>=panel.x && mx<= panel.x+100 && my >= panel.y && my < panel.y+100) {
                panel.show = false;
                return;
            }
        }
        if(panel.show &&　bg.occupied[bg.cbg]) {
            if(mx>=panel.x && mx<= panel.x+100 && my >= (panel.y-100) && my < panel.y) {
                if(bg.over[bg.cbg]=='house' && data.grassCount >= house.grassCost && data.sjCount >= house.sjCost){
                    house.level++;
                    panel.show = false;
                    data.grassCount = data.grassCount - house.grassCost;
                    data.sjCount = data.sjCount - house.sjCost;
                    return;
                };
                return;
            }
            if(mx>=panel.x && mx<= panel.x+100 && my >= (panel.y+100) && my < panel.y+200) {

                return;
            }
            if(mx>=panel.x && mx<= panel.x+100 && my >= panel.y && my < panel.y+100) {
                panel.show = false;
                return;
            }
        }

    }
}