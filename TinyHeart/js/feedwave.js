/**
 * Created by zoramac on 2017/2/9.
 */
/**
 * Created by zoramac on 2017/2/9.
 */
var feedwaveObj = function () {
    this.x     = [];
    this.y     = [];
    this.r     = [];
    this.alive = [];
    this.al    = [];
}
feedwaveObj.prototype.num = 20;
feedwaveObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
    }
}
feedwaveObj.prototype.born = function (i,x,y) {
    if(!this.alive[i]){
        this.alive[i] = true;
        this.x[i]     = x;
        this.y[i]     = y;
        this.r[i]     =20;
    }
}
feedwaveObj.prototype.draw = function () {
    ctx1.save();
    ctx1.shadowBlur  = 10;
    ctx1.lineWidth   = 2;
    ctx1.shadowColor = "rgba(134,45,145,0.5)";
    for(var i=0;i<this.num;i++){
        this.r[i] += deltaTime*0.03;
        var s = 100 + Math.random()*100;
        if(this.r[i] > s){
            this.alive[i] = false;
        }
        this.al[i] =1- this.r[i]/s;
        if(this.alive[i]){
            ctx1.beginPath();
            ctx1.strokeStyle = "rgba(134,45,145," + this.al[i] + ")";
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx1.closePath();
            ctx1.stroke();
        }
    }
    ctx1.restore();

}