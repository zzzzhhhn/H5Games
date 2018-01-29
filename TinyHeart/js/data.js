/**
 * Created by Zora on 2017/2/8.
 */

var dataObj = function () {
    this.fruitNum = 0;
    this.double   = 1;
    this.score    = 0;
    this.gameOver = false;
    this.al       = 0;
}
dataObj.prototype.draw = function () {
    var w = canWidth;
    var h = canHeight;
    ctx1.save();
    ctx1.shadowBlur  = 10;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = "white";
    ctx1.font      = "20px Verdana";
    ctx1.textAlign = "center";
    ctx1.fillText("果实:"+this.fruitNum,100,40);
    ctx1.fillText("倍数:"+this.double,300,40);
    ctx1.fillText("分数:"+this.score,w-200,40);
    ctx1.fillText("小鱼饥饿度:"+ (19-baby.babyBodyCount),w*0.5,h-100);
    ctx1.fillText(" © 左拉Zora 2017.2.14",w-150,h-30);
    ctx1.restore();
    ctx2.save();
    ctx2.shadowBlur = 20;
    ctx2.shadowColor = randomColor() + "1)";
    ctx2.font = "30px Verdana";
    ctx2.fillStyle = randomColor() + "1)";
    ctx2.textAlign = "center";
    ctx2.fillText("大鱼喂小鱼",600,40);
    ctx2.restore();
    if(this.gameOver){
        this.al += deltaTime * 0.0005;
        if(this.al >=1){
            this.al = 1;
        }
        ctx1.shadowBlur  = 10;
        ctx1.shadowColor = "white";
        ctx1.fillStyle = "rgba(255,255,255," +this.al + ")";
        ctx1.font      = "50px Verdana";
        ctx1.textAlign = "center";
        ctx1.fillText("Game Over",w*0.5,h*0.5);
    }
}