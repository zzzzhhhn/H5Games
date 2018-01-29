/**
 * Created by Zora on 2017/2/9.
 */
var dustObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];
    this.No  = [];
    this.al  = 0;
}
dustObj.prototype.num = 30;
dustObj.prototype.init= function () {
    for(var i=0;i<this.num;i++){
        this.x[i] = Math.random()*canWidth;
        this.y[i] = Math.random()*canHeight;
        this.amp[i]   = 50 + Math.random()*50;
        this.No[i]   = Math.floor(Math.random()*7);
    }
}
dustObj.prototype.draw = function () {
    this.al   += deltaTime * 0.0008;
    for(var i =0;i<this.num;i++){
        ctx1.drawImage(dustPic[this.No[i]],this.x[i] + Math.sin(this.al) * this.amp[i],this.y[i]);
    }
}