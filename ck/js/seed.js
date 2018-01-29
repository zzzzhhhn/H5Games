/**
 * Created by Zora on 2017/2/12.
 */
var seedObj = function () {
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
    this.shadow=5;
}

seedObj.prototype.init = function () {
    for (var i=0;i<this.num;i++) {
        this.x[i] = sr.x;
        this.y[i] = sr.y;
        this.s = 10;
        this.r[i] = 0;
        this.alive[i] = false;
        this.growing[i]  = false;
        this.X[i] = 0;
        this.Y[i] = 0;
        this.dir[i] = sr.dir;
        this.sp1 = 0.03;
        this.sp2 = 0.5;
        this.dps = 10;
    }
}

seedObj.prototype.born = function (i) {
    this.alive[i]  = true;
    this.x[i] = sr.x;
    this.y[i] = sr.y;
    this.r[i]      = 0;
    this.dir[i] = sr.dir;
}

seedObj.prototype.die =function (i) {
    this.growing[i] = false;
    this.alive[i] = false;
    this.r[i]     = 0;
}

seedObj.prototype.draw = function () {

    ctx2.save();


    ctx2.lineWidth = 2;
    for (var i=0;i<this.num;i++) {
        if (this.r[i] < this.s) {
            if(sr.dir=="left"){
                this.x[i] = sr.x;
            }else{
                this.x[i] = sr.x + srPicl[0].width;
            }
            this.r[i] += deltaTime*this.sp1;
            this.growing[i] = true;
        } else {
            this.growing[i] = false;
            if(this.dir[i]=="left"){
                this.x[i] -= deltaTime * this.sp2;
            } else{
                this.x[i] += deltaTime * this.sp2;
            }
        }
        if(this.y[i] < 0 || this.x[i] < 0 || this.x[i] > W || this.y[i] > H){
            this.die(i);
        }
        if(this.alive[i]){
            ctx2.beginPath();
            ctx2.strokeStyle = "yellow";
            ctx2.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx2.fillStyle = "blue";
            if(this.dpsup){
            ctx2.shadowBlur = 20;
            ctx2.shadowColor = randomColor() + "1)";
            ctx2.strokeStyle = randomColor() + "1)";
            ctx2.fillStyle = randomColor() + "0.6)";

             }
            ctx2.fill();
            ctx2.closePath();
            ctx2.stroke();
        }


    }
    ctx2.restore();
}


function sentseed() {
    var count = 0;
    for (var i=0;i<seed.num;i++) {
        if(seed.alive[i] && seed.growing[i]){
            count++;
        }
        if(!seed.alive[i] && count<1){
            seed.born(i);
            return;
        }
    }
}