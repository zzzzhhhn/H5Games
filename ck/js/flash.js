/**
 * Created by Zora on 2017/4/11.
 */
var flashObj = function () {
    this.x;
    this.y;
    this.live = false;
    this.time;
    this.Count;
    this.Timer;
    this.cd;
    this.cding;
    this.cost = 5;
}
flashObj.prototype.init = function () {
    this.x=ck.x;
    this.y=ck.y;
    this.Count = 0;
    this.Timer = 0;
    this.time = 250;
    this.cd = 10000;
    this.cding = false;
}
flashObj.prototype.draw = function () {
    this.Timer += deltaTime;
    if(this.Timer > 100){
        this.Count = (this.Count + 1)%4;
        this.Timer %= 100;
    }
    if(this.live) {
        this.time -= deltaTime;
        ctx2.drawImage(flashPic[this.Count],this.x,this.y);
    }
    if(this.time<=0){
        this.live = false;
        this.time = 250;
    }
    if(this.cding){
        this.cd -= deltaTime;
    }
    if(this.cd<=0){
        this.cding = false;
        this.cd = 10000;
    }
    ctx2.drawImage(flashLogo,600,H-100,50,50);
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("A",625,H-20,20,20);
    ctx2.restore();
    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.fillRect(600,H-100,50,50);
    ctx2.fill();
    ctx2.closePath();
    ctx2.stroke();
    if(this.cding) {
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.fillRect(600,H-100,50,50);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
        ctx2.save();
        ctx2.font = "20px Verdana";
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.fillText(Math.ceil(this.cd/1000),625,H-70,20,20);
        ctx2.restore();
    }else if (data.magic<this.cost){
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.fillRect(600,H-100,50,50);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
    }else {
        ctx2.fillStyle = "rgba(0,0,0,0)";
    }
}