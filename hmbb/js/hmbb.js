/**
 * Created by Zora on 2017/2/12.
 */
var hmbbObj = function () {
    this.x = 0;
    this.y = 0;
    this.jump  =false;
    this.w = 200;
    this.h = 200;
    this.dir= "left";
}

hmbbObj.prototype.init = function () {
    this.x = W * 0.5 - this.w*0.5;
    this.y = H - 200;
}
hmbbObj.prototype.draw = function () {
    if(this.jump){
        this.y -= 10;
    }
    if(this.y<=400){
        this.jump=false;
    }
    if(!this.jump){
        this.y += 7;
    }
    if(this.y < H-this.h){
        if(this.dir=="left"){
            hmbbPic.src= "src/hmbb0.png";
        }else{
            hmbbPic.src= "src/hmbb1.png";
        }
    }else{
        if(this.dir=="left"){
            hmbbPic.src= "src/hmbbcpp0.png";
        }else{
            hmbbPic.src= "src/hmbbcpp1.png";
        }
    }
    if(this.y>H-this.h){
        this.y= H-this.h;
    }
    if(this.x<=0){
        this.x = 0;
    }
    if(this.x>=W-this.w){
        this.x = W-this.w;
    }
    ctx2.drawImage(hmbbPic,this.x,this.y,200,200);
}

hmbbObj.prototype.moveLeft = function () {
    this.x -= 10;
    this.dir="left";
}

hmbbObj.prototype.moveRight = function () {
    this.x += 10;
    this.dir = "right";
}

hmbbObj.prototype.jumpUp = function () {
    if(this.y == H-this.h){
        this.jump = true;
    }
}