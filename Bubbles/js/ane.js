/**
 * Created by Zora on 2017/2/11.
 */
var aneObj = function () {
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.w     = [];
    this.amp   = [];
    this.num   = 100;
    this.al    = [];
    this.sin   = 0 ;
    this.col   = [];

}

aneObj.prototype.init =function () {
    for(var i=0;i<this.num;i++){
        this.rootx[i] = Math.random()*W;
        this.headx[i] = this.rootx[i];
        this.heady[i] = H - Math.random()*100 -300;
        this.w[i]     = 10 + Math.random()*30;
        this.amp[i]   = 50 + Math.random()*50;
        this.al[i]    = 0.5 + Math.random()*0.4;
        this.col[i]   = randomColor() + "1)"
    }
}

aneObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineCap = "round";
    this.sin += deltaTime * 0.0008;
    for(var i=0;i<this.num;i++){
        ctx1.strokeStyle = this.col[i];
        ctx1.lineWidth = this.w[i];
        ctx1.globalAlpha = this.al[i];
        this.headx[i] = this.rootx[i] + Math.sin(this.sin)*this.amp[i];
        ctx1.beginPath();
        ctx1.moveTo(this.rootx[i],H);
        ctx1.quadraticCurveTo(this.rootx[i],H - 100,this.headx[i],this.heady[i]);
        ctx1.stroke();
    }


    ctx1.restore();
}