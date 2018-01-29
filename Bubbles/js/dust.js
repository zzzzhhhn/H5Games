/**
 * Created by Zora on 2017/2/11.
 */
var dustObj = function () {
    this.x   = [];
    this.y   = [];
    this.No  = [];
    this.num = 30;
    this.sin =  0;
    this.amp = [];
}
dustObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i]   = W * Math.random();
        this.y[i]   = H * Math.random();
        this.No[i]  = Math.floor(Math.random()*7);
        this.amp[i] = 50 + Math.random()*50;
    }
}

dustObj.prototype.draw = function () {
    this.sin += deltaTime * 0.0008;
    for(var i =0;i<this.num;i++){
        ctx1.drawImage(dustPic[this.No[i]],this.x[i] + Math.sin(this.sin)*this.amp[i],this.y[i]);
    }

}