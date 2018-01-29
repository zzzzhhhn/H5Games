/**
 * Created by Zora on 2017/4/11.
 */
var boobomObj = function () {
    this.x;
    this.y;
    this.live = false;
    this.time = 5000;
    this.Count;
    this.Timer;
    this.cd;
    this.cding;
    this.boobom;
    this.dir;
    this.onGround;
}
boobomObj.prototype.init = function () {
    this.x=ck.x;
    this.y=ck.y;
    this.Count = 0;
    this.Timer = 0;
    this.cd = 10000;
    this.cding = false;
    this.dir = ck.dir;
    this.onGround = false;
}
boobomObj.prototype.draw = function () {
    this.Timer += deltaTime;
    if(this.Timer > 100){
        this.Count = (this.Count + 1)%14;
        this.Timer %= 100;
    }
    if(!boobomPicl[this.Count]){
        this.live = false;
    }
    if(!this.onGround) {
        if (this.dir == 'left') {
            this.boobom = boobomPicl;
            this.x -= 5;
        } else {
            this.boobom = boobomPicr;
            this.x += 5;
        }
    }
    if(this.y <= chick.y-50) {
        this.y += 5;
    }
    if(this.Count >= 8){
        this.onGround = true;
    }else {
        this.onGround = false;
    }
    if(this.live) {
        this.time -= deltaTime;
        ctx2.drawImage(this.boobom[this.Count],this.x,this.y,150,150);
    }
    if(this.time<=0){
        this.live = false;
        this.time = 5000;
    }
    if(this.cding){
        this.cd -= deltaTime;
    }
    if(this.cd<=0){
        this.cding = false;
        this.cd = 10000;
    }
}