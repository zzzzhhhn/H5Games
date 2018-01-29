/**
 * Created by zoramac on 2017/2/8.
 */
var boss2Obj = function () {
    this.x         = [];
    this.y         = [];
    this.bodyTimer = [];
    this.bodyCount = [];
    this.bodyPic   = "";
    this.blood     = [];
    this.alive     = [];
    this.num       = 3;
    this.dir       = [];
}
boss2Obj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i] =W*0.1+ W*Math.random()*0.7;
        this.y[i] = H*0.1+H*Math.random()*0.7;
        this.bodyTimer[i] = 0;
        this.bodyCount[i] = 0;
        this.blood[i]     = 500;
        this.alive[i]     =false;
    }
}
boss2Obj.prototype.draw = function () {
    for (var i=0;i<this.num;i++){
        this.bodyTimer[i] += deltaTime;
        if(this.x[i] > sr.x){
            this.bodyPic  = boss2lPic;
            this.dir[i]   = "left";
        }else {
            this.bodyPic = boss2rPic;
            this.dir[i]  = "right";
        }
        if(this.bodyTimer[i] > 50){
            this.bodyCount[i] = (this.bodyCount[i] + 1)%8;
            this.bodyTimer[i] %= 50;
        }
        if(this.x < 0){
            this.x = 0;
        }
        if(this.x > W-boss2lPic[0].width){
            this.x = W-boss2lPic[0].width;
        }
        if(this.y < 0){
            this.y = 0;
        }
        if(this.y > H-boss2lPic[0].height){
            this.y = H-boss2lPic[0].height;
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
            ctx2.lineTo(this.x[i]+100*this.blood[i]/500,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();
        }
    }


}
function boss2show() {
    for (var i=0;i<boss2.num;i++){
        if(!boss2.alive[i]){
            boss2.alive[i] = true;
            boss2.blood[i]=500;
            return;
        }
    }
}