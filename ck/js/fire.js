/**
 * Created by Zora on 2017/4/11.
 */
var fireObj = function () {
    this.x;
    this.y;
    this.live = false;
    this.time = 5000;
    this.Count;
    this.Timer;
    this.cd;
    this.cding;
    this.cost = 5;
}
fireObj.prototype.init = function () {
    this.x=ck.x;
    this.y=ck.y;
    this.Count = 0;
    this.Timer = 0;
    this.cd = 10000;
    this.cding = false;
}
fireObj.prototype.draw = function () {
    this.Timer += deltaTime;
    if(this.Timer > 100){
        this.Count = (this.Count + 1)%4;
        this.Timer %= 100;
    }
    if(this.live) {
        this.time -= deltaTime;
        ctx2.save();
        ctx2.translate(this.x,this.y);
        ctx2.rotate(Math.PI);
        ctx2.drawImage(firePic[this.Count],-firePic[0].width,-firePic[0].height);
        ctx2.restore();

    }
    ctx2.drawImage(fireLogo,200,H-100,50,50);
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("Z",225,H-20,20,20);
    ctx2.restore();
    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.arc(225, H - 75, 25, 0, Math.PI * 2);

    ctx2.fill();
    ctx2.closePath();
    ctx2.stroke();
    if(this.cding) {
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.arc(225, H - 75, 25, 0, Math.PI * 2);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
        ctx2.save();
        ctx2.font = "20px Verdana";
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.fillText(Math.ceil(this.cd/1000),225,H-65,20,20);
        ctx2.restore();
    }else if (data.magic<this.cost){
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.arc(225, H - 75, 25, 0, Math.PI * 2);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
    }else {
        ctx2.fillStyle = "rgba(0,0,0,0)";
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
