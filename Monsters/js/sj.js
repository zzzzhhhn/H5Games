/**
 * Created by Zora on 2017/6/11.
 */
var sjObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.num = 200;
    this.del;
    this.collected = [];
}
sjObj.prototype.init = function () {
    for (var i=0;i<this.num;i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.del = 20*1000;
        this.collected[i] = false;
    }
}

sjObj.prototype.draw = function () {
    for (var i=0;i<this.num;i++) {
        if(this.alive[i]) {
            ctx1.drawImage(sjPic,this.x[i],this.y[i],15,30);
        }
    }
}

sjObj.prototype.born = function(i,x,y) {
    this.x[i] = x;
    this.y[i] = y;
    this.alive[i] = true;
    this.collected[i] = false;
    return;
}
