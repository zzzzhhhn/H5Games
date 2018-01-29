/**
 * Created by Zora on 2017/6/2.
 */
var grassObj = function () {
    this.x = [];
    this.y = [];
    this.num;
    this.limit;
    this.del;
    this.alive = [];
    this.collected = [];
    this.growDel;
}

grassObj.prototype.init = function () {
    this.num = bg.num;
    this.limit = 10;
    this.del = 0;
    this.growDel = 1000*5 + Math.random()*1000;
    for (var i=0;i<this.num;i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.collected[i] = false;
    }
}

grassObj.prototype.draw = function () {
    this.del += deltaTime;

    if(this.del > this.growDel) {
        grass.limit++;
        this.del %= this.growDel;
    }

    for (var i=0;i<this.num;i++) {
        if(this.alive[i]) {
            ctx1.drawImage(grassPic,this.x[i],this.y[i],grassPic.width,grassPic.height);
        }

    }
}

grassObj.prototype.grow = function (i) {
    if(!bg.occupied[i]) {
        this.x[i] =bg.x[i] + Math.random()*50;
        this.y[i] = bg.y[i] + Math.random()*50;
        bg.occupied[i] = true;
        this.alive[i] = true;
        this.collected[i] = false;
        bg.over[i] = 'grass';
    }
}

grassObj.prototype.clean = function (i) {
    this.alive[i] = false;
    bg.occupied[i] = false;
}

function grassControl() {
    var count = 0;
    for (var i=0;i<grass.num;i++) {
        if(grass.alive[i]) {
            count++;
        }
    }
    if(count < grass.limit) {
        var i = Math.floor(Math.random()*bg.num);
        if(!grass.alive[i] && !bg.occupied[i]) {
            grass.grow(i);
            return;
        }

    }
}

