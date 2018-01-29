/**
 * Created by Zora on 2017/4/11.
 */
var levelObj = function () {
    this.x;
    this.y;
    this.live = true;
    this.time = 400;
    this.Count;
    this.Timer;
}
levelObj.prototype.init = function () {
    this.x=ck.x;
    this.y=ck.y;
    this.Count = 0;
    this.Timer = 0;
    this.dir = ck.dir;
}
levelObj.prototype.draw = function () {
    this.x=ck.x-30;
    this.y=ck.y;
    this.Timer += deltaTime;
    if(this.Timer > 200){
        this.Count = (this.Count + 1)%4;
        this.Timer %= 200;
    }
    if(this.live) {
        this.time -= deltaTime;
        ctx2.drawImage(levelPic[this.Count],this.x,this.y);
    }
    if(this.time<=0){
        this.live = false;
        this.time = 400;
    }

}