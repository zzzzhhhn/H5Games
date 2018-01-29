/**
 * Created by Zora on 2017/2/10.
 */
var jsObj = function () {
    this.x        = [];
    this.y        = [];
    this.bodyCount= [];
    this.num      = 50;
    this.bodyTimer= [];
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
    this.blood     = [];
    this.js;
    this.hit;
}

jsObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i] =  W * Math.random();
        this.y[i] =  H * 0.6 + Math.random()*300;
        this.bodyCount[i] = 0;
        this.bodyTimer[i] = 0;
        this.alive[i]     = false;
        this.X[i]            = W * 0.5;
        this.Y[i]            = H * 0.5;
        this.tx[i]            = Math.random()*10;
        this.ampx[i]          =  W*0.4 + Math.random()*W*0.1;
        this.spx[i]           =  0.98 + Math.random()*0.01;
        this.al[i]           = 0;
        this.ty[i]            = Math.random()*10;
        this.ampy[i]          = H*0.4 +   Math.random()*H*0.1;
        this.spy[i]           =  0.99 + Math.random()*0.005;
        this.blood[i]    = 100;
        this.hit = false;
    }
}

jsObj.prototype.born = function (i) {
    this.hit = false;
    this.alive[i] = true;
    this.blood[i] = 100;
}

jsObj.prototype.draw = function () {
    //this.limit += deltaTime*0.0002;
    for(var i=0;i<this.num;i++){
        if(this.limit>=this.num){
            this.limit = this.num;
            data.gameover =true;
        }
        if(!this.hit){

        }
        this.tx[i] += deltaTime * Math.random()*0.0001;
        this.X[i] = W * 0.5+ Math.sin(this.tx[i])*  this.ampx[i];
        this.x[i] = lerpDistance(this.X[i],this.x[i],this.spx[i]);
        this.ty[i] += deltaTime * Math.random()*0.001;
        this.Y[i] = H * 0.5 + Math.sin(this.ty[i]) *this.ampy[i];
        this.y[i] = lerpDistance(this.Y[i],this.y[i],this.spy[i]);
        this.bodyTimer[i] += deltaTime + Math.random()*10;
        if(this.X[i]>this.x[i]) {
            this.js = jsPicr;
        }else {
            this.js = jsPicl;
        }
        if(this.blood[i]<=0) {
            this.blood[i] = 0;
            this.alive[i] = false;
            this.limit -- ;
        }
        if(this.bodyTimer[i] > 50){
            this.bodyCount[i] = (this.bodyCount[i]+1)%7;
            this.bodyTimer[i]   %= 50;
        }
        if(this.x[i] < 0){
            this.x[i] = 0;
        }
        if(this.x[i] > W-jsPicl[0].width){
            this.x[i] = W-jsPicl[0].width;
        }
        if(this.y[i] < 0){
            this.y[i] = 0;
        }
        if(this.y[i] > H-jsPicl[0].height){
            this.y[i] = H-jsPicl[0].height;
        }
        if(this.alive[i]){
            ctx2.save();
            ctx2.drawImage(this.js[this.bodyCount[i]],this.x[i],this.y[i]);
            ctx2.fillText('0',this.x[i]+jsPicl[0].width*0.5,this.y[i]+jsPicl[0].height*0.5);
            ctx2.restore();

            ctx2.save();
            ctx2.strokeStyle = "white";
            ctx2.lineWidth = 20;
            ctx2.globalAlpha = 0.1;
            ctx2.lineCap = "round";
            ctx2.beginPath();
            ctx2.moveTo(this.x[i],this.y[i]-20);
            ctx2.lineTo(this.x[i]+jsPicl[0].width,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();

            ctx2.save();
            ctx2.strokeStyle = "red";
            ctx2.lineWidth = 20;
            ctx2.lineCap = "round";
            ctx2.beginPath();
            ctx2.moveTo(this.x[i],this.y[i]-20);
            ctx2.lineTo(this.x[i]+jsPicl[0].width*this.blood[i]/100,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();
        }
    }

}


function jsControl() {
    var count = 0;
    for (var i=0;i<js.num;i++) {
       if(js.alive[i]){
           count++;
       }

    }
    if(count<js.limit){
        sentjs();
        return;
    }
}

function sentjs() {
    for(var i=0;i<js.num;i++){
        if(!js.alive[i]){
            js.born(i);
            return;
        }
    }
}