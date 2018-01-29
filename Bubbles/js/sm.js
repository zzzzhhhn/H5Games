/**
 * Created by Zora on 2017/2/12.
 */
var smObj = function () {
    this.x     =  [];
    this.y     =  [];
    this.X     =  [];
    this.Y     =  [];
    this.apmX  =  [];
    this.apmY  =  [];
    this.num   =  20;
    this.spX   =  [];
    this.spY   =  [];
    this.delX  =  [];
    this.delY  =  [];
    this.alive =  [];
    this.limit =  3 ;
    this.al    =  [];
}

smObj.prototype.init =function () {
    for (var i=0;i<this.num;i++) {
        this.X[i]   = W * 0.5;
        this.Y[i]   = H * 0.25;
        this.x[i]   = W * Math.random();
        this.y[i]   = H * Math.random() * 0.5;
        this.apmX[i]= W * 0.4 + W * Math.random() * 0.1;
        this.apmY[i]= H * 0.1 + H * Math.random() * 0.2;
        this.spX[i] = 0.98 + Math.random() * 0.01;
        this.spY[i] = 0.98 + Math.random() * 0.01;
        this.delX[i]= Math.random()*10;
        this.delY[i]= Math.random()*10;
        this.alive[i] = false;
        this.al[i]  = 0;
    }
}

smObj.prototype.born = function (i) {
    this.alive[i] = true;
    this.x[i]   = W * Math.random();
    this.y[i]   = H * Math.random() * 0.5;
}

smObj.prototype.draw = function () {
    this.limit += deltaTime * 0.0001;
    if(sm.limit >= sm.num){
        sm.limit = sm.num;
    }
    for (var i=0;i<this.num;i++) {
        this.delX[i] += deltaTime * Math.random() * 0.001;
        this.delY[i] += deltaTime * Math.random() * 0.001;
        this.X[i] = W * 0.5  + Math.sin(this.delX[i]) * this.apmX[i];
        this.Y[i] = H * 0.25 + Math.sin(this.delY[i]) * this.apmY[i];
        this.x[i] = lerpDistance(this.X[i],this.x[i],this.spX[i]);
        this.y[i] = lerpDistance(this.Y[i],this.y[i],this.spY[i]);
        var beta  = [];
        beta[i]  = Math.atan2(this.Y[i]-this.y[i],this.X[i]-this.x[i]) + Math.PI;
        this.al[i]= lerpAngle(beta[i],this.al[i],0.99);
        if(this.alive[i]){
            ctx2.save();
            ctx2.translate(this.x[i],this.y[i]);
            ctx2.rotate(this.al[i]);
            ctx2.drawImage(smPic,0,0);
            ctx2.restore();
        }
    }
}

function smControl() {
    var count = 0;
    for (var i=0;i<sm.num;i++) {
        if(sm.alive[i]){
            count++;
        }

    }
    if(count<sm.limit){
        sentSm();
        return;
    }

}

function sentSm() {
    for(var i=0;i<sm.num;i++){
        if(!sm.alive[i]){
            sm.born(i);
            return;
        }
    }
}