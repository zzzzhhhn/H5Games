/**
 * Created by Zora on 2017/6/11.
 */
var dataObj = function () {
    this.gameover;
    this.sjCount;
    this.grassCount;
    this.limit;
    this.attact;
    this.attactDel;
    this.al;
}

dataObj.prototype.init = function () {
    this.gameover = false;
    this.sjCount = 0;
    this.grassCount = 0;
    this.limit = 0;
    this.attact = 1;
    this.attactDel = 120000;
    this.al = 0;
}

dataObj.prototype.draw = function () {
    ctx2.save();
    ctx2.shadowBlur  = 10;
    ctx2.shadowColor = "gray";
    ctx2.fillStyle = "yellow";
    ctx2.font = "20px Verdana";
    ctx2.textAlign = "left";
    ctx2.fillText('水晶：'+this.sjCount,50,30);
    ctx2.fillText('纤维：'+this.grassCount,50,60);
    ctx2.fillText('怪物：'+this.limit,50,90);
    ctx2.fillText('房屋耐久：'+house.life,50,120);
    ctx2.fillText('下一波人数：'+this.attact,1000,30);
    ctx2.fillText('下一波倒计时：'+Math.ceil(this.attactDel/1000),1000,60);
    ctx2.fillText(" © 左拉Zora 2017.07",W-250,H-30);
    ctx2.restore();
    if(this.gameover){
        this.al += deltaTime * 0.0005;
        if(this.al >=1){
            this.al = 1;
        }
        ctx2.save();
        ctx2.shadowBlur  = 10;
        ctx2.shadowColor = "white";
        ctx2.fillStyle = "rgba(255,255,255," +this.al + ")";
        ctx2.font      = "50px Verdana";
        ctx2.textAlign = "center";
        ctx2.fillText("Game Over",W*0.5,H*0.5);
        ctx2.restore();
    }
}

function attact() {
    data.attactDel-=deltaTime;
    if(data.attactDel<=0) {
        knight.num += data.attact;
        data.attactDel =120000;
        data.attact +=2;
        return;
    }
}