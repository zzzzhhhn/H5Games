/**
 * Created by Zora on 2017/2/11.
 */
function clickBubble() {
    for (var i=0;i<bubble.num;i++){
        if(bubble.alive[i] && bubble.full[i] && !data.gameover){
            var l = calLength2(bubble.x[i],bubble.y[i],mx,my);
            if(l<bubble.r[i]*bubble.r[i]){
                bubble.die(i);
                data.score+=10;
            }
        }
    }
}
function clickSm() {
    for (var i=0;i<sm.num;i++){
        if(sm.alive[i] && !data.gameover){
            var l = calLength2(sm.x[i]+smPic.width*0.5,sm.y[i]+smPic.height*0.5,mx,my);
            var l2= Math.pow(smPic.width*0.5,2)+Math.pow(smPic.height*0.5,2);
            if(l<l2){
                sm.alive[i] = false;
                sm.limit--;
                data.life --;
            }
        }
    }
}
var dataObj = function () {
    this.gameover = false;
    this.score    = 0;
    this.life     = 10;
    this.al       = 0;
}

dataObj.prototype.draw = function () {
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("生命值："+data.life,W-100,40);
    ctx2.fillText("得分："+ data.score,W-300,40);
    ctx2.fillText("小鱼数："+ Math.ceil(big.limit),300,40);
    ctx2.fillText("水母数："+ Math.ceil(sm.limit),100,40);
    ctx2.fillText(" © 左拉Zora 2017.2.14",W-150,H-30);
    ctx2.restore();
    ctx2.save();
    ctx2.shadowBlur = 20;
    ctx2.shadowColor = randomColor() + "1)";
    ctx2.font = "30px Verdana";
    ctx2.fillStyle = randomColor() + "1)";
    ctx2.textAlign = "center";
    ctx2.fillText("点泡泡",560,40);
    ctx2.restore();
    if(data.gameover){
        this.al +=deltaTime*0.0005;
        if(this.al >= 1){
            this.al=1;
        }
        ctx2.save();
        ctx2.shadowBlur = 10;
        ctx2.shadowColor = "white";
        ctx2.font = "50px Verdana";
        ctx2.fillStyle ="rgba(255,255,255,"+this.al+")";
        ctx2.textAlign = "center";
        ctx2.fillText("GameOver",W*0.5,H*0.5);
        ctx2.restore();
    }
}