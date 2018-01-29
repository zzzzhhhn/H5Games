/**
 * Created by Zora on 2017/2/12.
 */
var seed1Obj = function () {
    this.x = [];
    this.y = [];
    this.X = [];
    this.Y = [];
    this.s =0;
    this.r = [];
    this.num = 50;
    this.alive = [];
    this.growing = [];
    this.al  = [];
    this.dir  = [];
    this.sp1  = 0;
    this.sp2  = 0;
    this.dps  = 0;
    this.dpsup= false;
    this.bossnum = [];
}

seed1Obj.prototype.init = function () {
    for (var i=0;i<this.num;i++) {
        this.x[i] = sr.x;
        this.y[i] = sr.y;
        this.s = 50;
        this.r[i] = 0;
        this.alive[i] = false;
        this.growing[i]  = false;
        this.X[i] = 0;
        this.Y[i] = 0;
        this.sp1 = 0.075;
        this.sp2 = 0.5;
        this.bossnum[i]=0;
    }
}

seed1Obj.prototype.born = function (i) {
    this.bossnum[i]= Math.floor(Math.random()*boss2.num);
    if(boss2.alive[this.bossnum[i]]){
        this.alive[i]  = true;
        this.x[i] = boss2.x[this.bossnum[i]];
        this.y[i] = boss2.y[this.bossnum[i]]+75;
        this.r[i]      = 0;
        this.dir[i] = boss2.dir[this.bossnum[i]];
    }
}

seed1Obj.prototype.die =function (i) {
    this.growing[i] = false;
    this.alive[i] = false;
    this.r[i]     = 0;
}

seed1Obj.prototype.draw = function () {
    ctx2.save();
    ctx2.lineWidth = 2;
    for (var i=0;i<this.num;i++) {
        if (boss2.alive[this.bossnum[i]]) {
            if (this.r[i] < this.s) {
                if (boss2.dir[this.bossnum[i]] == "left") {
                    this.x[i] = boss2.x[this.bossnum[i]];
                } else {
                    this.x[i] = boss2.x[this.bossnum[i]] + boss2lPic[0].width;
                }
                this.r[i] += deltaTime * this.sp1;
                this.growing[i] = true;
            } else {
                this.growing[i] = false;
                if (this.dir[i] == "left") {
                    this.x[i] -= deltaTime * this.sp2;
                } else {
                    this.x[i] += deltaTime * this.sp2;
                }
            }
            if (this.y[i] < 0 || this.x[i] < 0 || this.x[i] > W || this.y[i] > H) {
                this.die(i);
            }
            if (this.alive[i] && boss2.alive[this.bossnum[i]]) {
                ctx2.beginPath();
                ctx2.strokeStyle = "purple";
                ctx2.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
                ctx2.fillStyle = "black";
                ctx2.shadowBlur = 50;
                ctx2.shadowColor = "purple";
                ctx2.fill();
                ctx2.closePath();
                ctx2.stroke();
            }
        }
    }
    ctx2.restore();
}

function numControl() {
    var count = 0;
    for (var i=0;i<seed1.num;i++) {
        if(seed1.alive[i] && seed1.growing[i]){
            count++;
        }
    }
    if(count<1){
        sentseed1();
        return;
    }
}

function sentseed1() {
    for (var i=0;i<seed1.num;i++) {
        if(!seed1.alive[i]){
            seed1.born(i);
            return;
        }
    }
}