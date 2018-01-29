/**
 * Created by Zora on 2017/2/10.
 */
var bigObj = function () {
    this.x        = [];
    this.y        = [];
    this.eyeCount = [];
    this.bodyCount= [];
    this.tailCount= [];
    this.num      = 50;
    this.eyeTimer = [];
    this.eyeDet   = [];
    this.tailTimer= [];
    this.X        = [];
    this.Y        = [];
    this.tx        = [];
    this.ampx      = [];
    this.spx       = [];
    this.al       = [];
    this.ty        = [];
    this.ampy      = [];
    this.spy       = [];
    this.alive     = [];
    this.limit     = 5 ;
}

bigObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i] =  W * Math.random();
        this.y[i] =  H * 0.6 + Math.random()*300;
        this.tailCount[i] = 0;
        this.bodyCount[i] = 0;
        this.eyeCount[i]  = 0;
        this.eyeDet[i]    = 2000;
        this.eyeTimer[i]  = 0;
        this.tailTimer[i] = 0;
        this.alive[i]     = false;
        this.X[i]            = W * 0.5;
        this.Y[i]            = H * 0.5;
        this.tx[i]            = Math.random()*10;
        this.ampx[i]          =  W*0.4 + Math.random()*W*0.1;
        this.spx[i]           =  0.98 + Math.random()*0.01;
        this.al[i]           = 0;
        this.ty[i]            = Math.random()*10;
        this.ampy[i]          = H*0.1 +   Math.random()*H*0.1;
        this.spy[i]           =  0.98 + Math.random()*0.01;
    }
}

bigObj.prototype.born = function (i) {
    this.alive[i] = true;
}

bigObj.prototype.draw = function () {
    this.limit += deltaTime*0.0002;
    for(var i=0;i<this.num;i++){
        if(this.limit>=this.num){
            this.limit = this.num;
        }
        this.tx[i] += deltaTime * Math.random()*0.001;
        this.X[i] = W * 0.5+ Math.sin(this.tx[i])*  this.ampx[i];
        this.x[i] = lerpDistance(this.X[i],this.x[i],this.spx[i]);
        this.ty[i] += deltaTime * Math.random()*0.001;
        this.Y[i] = H * 0.7 + Math.sin(this.ty[i]) *this.ampy[i];
        this.y[i] = lerpDistance(this.Y[i],this.y[i],this.spy[i]);
        var beta = [];
        beta[i] = Math.atan2(this.Y[i]-this.y[i],this.X[i]-this.x[i]) + Math.PI;
        this.al[i]  = lerpAngle(beta[i],this.al[i],0.99);
        this.bodyCount[i] = Math.floor(Math.random()*8);
        this.tailTimer[i] += deltaTime + Math.random()*10;
        if(this.tailTimer[i] > 50){
            this.tailCount[i] = (this.tailCount[i]+1)%8;
            this.tailTimer[i]   %= 50;
        }
        this.eyeTimer[i] += deltaTime;
        if(this.eyeTimer[i] > this.eyeDet[i]) {
            this.eyeCount[i] = (this.eyeCount[i] + 1)%2;
            this.eyeTimer[i] %= this.eyeDet[i];
            if(this.eyeCount[i] == 0){
                this.eyeDet[i] = 2000 +Math.random()*2000;
            }else {
                this.eyeDet[i] = 100;
            }
        }
        if(this.alive[i]){
            ctx2.save();
            ctx2.translate(this.x[i],this.y[i]);
            ctx2.rotate(this.al[i]);
            ctx2.drawImage(bigBody[this.bodyCount[i]],-bigBody[this.bodyCount[i]].width*0.5,-bigBody[this.bodyCount[i]].height*0.5);
            ctx2.drawImage(bigEye[this.eyeCount[i]],-bigEye[this.eyeCount[i]].width*0.5,-bigEye[this.eyeCount[i]].height*0.5);
            ctx2.drawImage(bigTail[this.tailCount[i]],-bigTail[this.tailCount[i]].width*0.5+30,-bigTail[this.tailCount[i]].height*0.5);
            ctx2.restore();
        }

        //ctx2.fillText(this.al[i],W * 0.5,H * 0.5);
    }

}


function bigControl() {
    var count = 0;
    for (var i=0;i<big.num;i++) {
       if(big.alive[i]){
           count++;
       }

    }
    if(count<big.limit){
        sentBig();
        return;
    }
}

function sentBig() {
    for(var i=0;i<big.num;i++){
        if(!big.alive[i]){
            big.born(i);
            return;
        }
    }
}