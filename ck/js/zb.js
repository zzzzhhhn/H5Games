/**
 * Created by Zora on 2017/2/11.
 */
var zbObj = function () {
    this.x   = [];
    this.y   = [];
    this.num = 50;
    this.alive = [];
    this.lifetime = [];
}
zbObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i]   = W *0.5;
        this.y[i]   = H*0.5;
        this.alive[i] = false;
        this.lifetime[i] = 5000;
    }
}
zbObj.prototype.draw = function () {
    for(var i =0;i<this.num;i++){
        if(this.alive[i]){
            this.lifetime[i] -= deltaTime;
            if(this.lifetime[i]<=0){
                this.alive[i] = false;
            }
            ctx2.save();
            ctx2.shadowBlur = 5;
            ctx2.shadowColor = randomColor()+"1)";
            ctx2.drawImage(zbPic,this.x[i],this.y[i],50,80);
            ctx2.restore();
        }
    }
}