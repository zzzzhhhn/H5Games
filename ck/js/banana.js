/**
 * Created by Zora on 2017/4/11.
 */
var bananaObj = function () {
    this.x;
    this.y;
    this.live = false;
    this.time = 2000;
    this.Count;
    this.Timer;
    this.cd;
    this.cding;
    this.banana;
    this.dir;
    this.cost = 5;
    this.al = 0;
    this.lifeX;
    this.lifeY;
}
bananaObj.prototype.init = function () {
    this.x=ck.x;
    this.y=ck.y;
    this.Count = 0;
    this.Timer = 0;
    this.cd = 15000;
    this.cding = false;
    this.dir = ck.dir;

}
bananaObj.prototype.draw = function () {
    this.Timer += deltaTime;
    if(this.Timer > 200){
        this.Count = (this.Count + 1)%10;
        this.Timer %= 200;
    }

    if(this.dir=='left'){
        this.banana = bananaPicr;
    }else {
        this.banana = bananaPicl;
    }
    if(this.time<=0){
        this.live = false;
        this.time = 2000;
    }
    if(this.live) {
        this.time -= deltaTime;
        ctx2.drawImage(this.banana[this.Count],this.x,this.y,this.banana[this.Count].width*0.7,this.banana[this.Count].height*0.7);
        this.al +=deltaTime*0.0005;
        if(this.al >= 1){
            this.al=0;
        }
        this.lifeX = ck.x + 40;
        this.lifeY = ck.y + 20;
        this.lifeY --;
        ctx2.save();
        ctx2.shadowBlur = 10;
        ctx2.shadowColor = "white";
        ctx2.font = "30px Verdana";
        ctx2.fillStyle ="rgba(0,255,0,"+this.al+")";
        ctx2.textAlign = "center";
        ctx2.fillText("+ 10 ",this.lifeX,this.lifeY);
        ctx2.restore();
    }

    if(this.cding){
        this.cd -= deltaTime;
    }
    if(this.cd<=0){
        this.cding = false;
        this.cd = 15000;
    }
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("G",825,H-20,20,20);
    ctx2.restore();
    ctx2.save();
    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.fillStyle = "rgba(200,200,200,0.5)";
    ctx2.fillRect(800,H-100,50,50);
    ctx2.fill();
    ctx2.closePath();
    ctx2.stroke();
    ctx2.restore();
    ctx2.drawImage(bananaLogo,800,H-100,50,50);

    if(this.cding) {
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.fillRect(800,H-100,50,50);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
        ctx2.save();
        ctx2.font = "20px Verdana";
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.fillText(Math.ceil(this.cd/1000),825,H-70,20,20);
        ctx2.restore();
    }else if (data.magic<this.cost){
        ctx2.save();
        ctx2.fillStyle = "rgba(0,0,0,0.5)";
        ctx2.beginPath();
        ctx2.strokeStyle = "black";
        ctx2.fillRect(800,H-100,50,50);
        ctx2.fill();
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
    }else {
        ctx2.fillStyle = "rgba(0,0,0,0)";
    }
}