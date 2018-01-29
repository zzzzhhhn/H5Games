/**
 * Created by zoramac on 2017/2/8.
 */
var boss1Obj = function () {
    this.x         = [];
    this.y         = [];
    this.bodyTimer = [];
    this.bodyCount = [];
    this.bodyPic   = "";
    this.blood     = [];
    this.alive     = [];
    this.num       = 1;
}
boss1Obj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i] =W*0.1+ W*Math.random()*0.7;
        this.y[i] = H*0.1+H*Math.random()*0.7;
        this.bodyTimer[i] = 0;
        this.bodyCount[i] = 0;
        this.blood[i]     = 1000;
        this.alive[i]     =false;
    }
}
boss1Obj.prototype.draw = function () {
    for (var i=0;i<this.num;i++){
        this.x[i] = lerpDistance(sr.x,this.x[i],0.99);
        this.y[i] = lerpDistance(sr.y,this.y[i],0.99);
        this.bodyTimer[i] += deltaTime;
        if(this.x[i] > sr.x){
            this.bodyPic  = boss1lPic;
        }else {
            this.bodyPic = boss1rPic;
        }
        if(this.bodyTimer[i] > 50){
            this.bodyCount[i] = (this.bodyCount[i] + 1)%8;
            this.bodyTimer[i] %= 50;
        }
        if(this.alive[i]){
            ctx2.save();
            ctx2.drawImage(this.bodyPic[this.bodyCount[i]],this.x[i],this.y[i]);
            ctx2.restore();

            ctx2.save();
            ctx2.strokeStyle = "white";
            ctx2.lineWidth = 20;
            ctx2.globalAlpha = 0.1;
            ctx2.lineCap = "round";
            ctx2.beginPath();
            ctx2.moveTo(this.x[i],this.y[i]-20);
            ctx2.lineTo(this.x[i]+200,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();

            ctx2.save();
            ctx2.strokeStyle = "purple";
            ctx2.lineWidth = 20;
            ctx2.lineCap = "round";
            ctx2.beginPath();
            ctx2.moveTo(this.x[i],this.y[i]-20);
            ctx2.lineTo(this.x[i]+200*this.blood[i]/1000,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();
        }
    }


}
function boss1show() {
    for (var i=0;i<boss1.num;i++){
        if(!boss1.alive[i]){
            boss1.alive[i] = true;
            boss1.blood[i]=1000;
            return;
        }
    }
}