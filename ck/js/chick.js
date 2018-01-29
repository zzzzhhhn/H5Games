/**
 * Created by Zora on 2017/4/11.
 */
var chickObj = function () {
    this.x;
    this.y;
    this.live = false;
    this.time = 5000;
    this.Count;
    this.Timer;
    this.cd;
    this.cding;
    this.chick;
    this.dir;
    this.cost = 10;
}
chickObj.prototype.init = function () {
    this.x=ck.x;
    this.y=ck.y;
    this.Count = 0;
    this.Timer = 0;
    this.cd = 10000;
    this.cding = false;
    this.dir = ck.dir;
}
chickObj.prototype.draw = function () {
    this.Timer += deltaTime;
    if(this.Timer > 100){
        this.Count = (this.Count + 1)%14;
        this.Timer %= 100;
    }
    if(!chickPicl[this.Count]){
        this.live = false;
    }
    if(this.dir=='left'){
        this.chick = chickPicl;
    }else {
        this.chick = chickPicr;
    }
    if(this.live) {
        this.time -= deltaTime;
        ctx2.drawImage(this.chick[this.Count],this.x,this.y,100,100);
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

    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("D",725,H-20,20,20);
    ctx2.restore();
    ctx2.save();
    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.fillStyle = "rgba(200,200,200,0.5)";
    ctx2.fillRect(700,H-100,50,50);
    ctx2.fill();
    ctx2.closePath();
    ctx2.stroke();
    ctx2.restore();
    ctx2.drawImage(chickLogo,700,H-100,50,50);
    if(this.cding) {
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.fillRect(700,H-100,50,50);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
        ctx2.save();
        ctx2.font = "20px Verdana";
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.fillText(Math.ceil(this.cd/1000),725,H-70,20,20);
        ctx2.restore();
    }else if (data.magic<this.cost){
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.fillRect(700,H-100,50,50);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
    }else {
        ctx2.fillStyle = "rgba(0,0,0,0)";
    }
}