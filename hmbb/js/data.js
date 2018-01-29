/**
 * Created by Zora on 2017/2/12.
 */
function hit() {
    for(var i=0;i<sm.num;i++){
        for (var j=0;j<bubble.num;j++){
            var l1 = calLength2(sm.x[i]+smPic.width*0.5,sm.y[i]+smPic.height*0.5,bubble.x[j],bubble.y[j]);
            var l2 = Math.pow(bubble.r[j],2);
            if(l1<l2 && bubble.alive[j] && sm.alive[i]){
                bubble.alive[j] = false;
                sm.alive[i]     = false;
                sm.limit--;
                if( !data.gameover){
                    data.score += 10;
                }
            }
        }
    }
    for(var i=0;i<pdx.snum;i++){
        var l3 = calLength2(pdx.smdX[i]+smPic.width*0.5,pdx.smdY[i]+smPic.height*0.5,hmbb.x+hmbb.w*0.5,hmbb.y+hmbb.h*0.5);
        if(l3 < 5000 && !data.protect){
            data.life -- ;
            data.protect = true;
            if(data.life <=0){
                data.life = 0;
                data.gameover =true;
            }
        }
    }
}


var dataObj = function () {
    this.gameover = false;
    this.score    = 0;
    this.life     = 3;
    this.al       = 0;
    this.protect  = false;
}
dataObj.prototype.draw = function () {
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("生命值："+Math.floor(data.life),W-100,40);
    ctx2.fillText("得分："+ data.score,W-300,40);
    ctx2.fillText("水母数："+ Math.ceil(sm.limit)+"/50",200,40);
    ctx2.fillText(" © 左拉Zora 2017.2.14",W-150,H-30);
    ctx2.restore();
    ctx2.save();
    ctx2.shadowBlur = 20;
    ctx2.shadowColor = randomColor() + "1)";
    ctx2.font = "30px Verdana";
    ctx2.fillStyle = randomColor() + "1)";
    ctx2.textAlign = "center";
    ctx2.fillText("海绵宝宝吹泡泡",560,40);
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