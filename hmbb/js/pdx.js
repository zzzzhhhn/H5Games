/**
 * Created by Zora on 2017/2/12.
 */
var pdxObj = function () {
    this.x = 0;
    this.y = 0;
    this.w = 200;
    this.h = 200;
    this.amp=0;
    this.s = 0;
    this.dir = "";
    this.smdX = [];
    this.smdY = [];
    this.snum = 3 ;
}

pdxObj.prototype.init = function () {
    this.x = 100;
    this.y = H - this.h + 10;
    this.amp = W * 1.5;
    this.dir = "right";
    for (var i=0;i<this.snum;i++) {
        this.smdX[i] = this.x - (i+1)*75;
        this.smdY[i] = this.y +100;
    }
}

pdxObj.prototype.draw = function () {
    ctx2.save();
    if(this.dir == "right"){
        pdxPic.src = "src/pdx0.png";
        smdPic.src  = "src/sm0.png";
        for (var i=0;i<this.snum;i++) {
            this.smdX[i] = this.x - (i+1)*75;
        }

    }else{
        pdxPic.src = "src/pdx1.png";
        smdPic.src  = "src/sm1.png";
        for (var i=0;i<this.snum;i++) {
            this.smdX[i] = this.x + this.w * 0.5 + (i+1)*75;
        }
    }
    if(this.smdX[this.snum-1]<-50){
        this.dir = "right";
        data.protect = false;
    }
    if(this.smdX[this.snum-1]>W-150){
        this.dir = "left";
        data.protect = false;
    }
    this.s += deltaTime*(0.0002+0.0001*Math.floor(data.score/100));
    this.x =  W*0.9 + Math.sin(this.s)*this.amp;
    ctx2.drawImage(pdxPic,this.x,this.y);
    for (var i=0;i<this.snum;i++) {
        ctx2.drawImage(smdPic,this.smdX[i],this.smdY[i]);
    }

    ctx2.restore();
}