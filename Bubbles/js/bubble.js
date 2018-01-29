/**
 * Created by Zora on 2017/2/11.
 */
var bubbleObj = function () {
    this.x   = [];
    this.y   = [];
    this.r   = [];
    this.num = 100;
    this.alive = [];
    this.full  = [];
    this.s   = [];
    this.sp  = [];
    this.al  = [];
    this.bigNum = [];
}

bubbleObj.prototype.init = function () {
    for (var i=0;i<this.num;i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.r[i] = 0;
        this.alive[i] = false;
        this.full[i]  = false;
        this.s[i] = 10 + Math.random()*20;
        this.sp[i]= 0.1+ Math.random()*0.03;
        this.al[i]= 1;
    }
}

bubbleObj.prototype.born = function (i) {
    this.bigNum[i] = Math.floor(Math.random()*big.num);
    if(big.alive[this.bigNum[i]]){
        this.alive[i] = true;
        this.r[i] = 3;
        this.x[i] = big.x[this.bigNum[i]];
        this.y[i] = big.y[this.bigNum[i]];
    }
}
bubbleObj.prototype.die = function (i) {
    this.alive[i] = false;
    this.full[i]  = false;
}
bubbleObj.prototype.draw =function () {
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor= randomColor() + "1)";
    ctx2.lineWidth  = 2;
    for(var i=0;i<this.num;i++){
        if(this.r[i] < this.s[i]) {
            this.r[i] += deltaTime * this.sp[i];
            this.x[i] = big.x[this.bigNum[i]];
            this.al[i] = this.r[i]/this.s[i];
        }else {
            this.full[i] = true;
            this.r[i] += deltaTime * this.sp[i]*0.05;
            this.y[i] -= deltaTime * this.sp[i];
            this.al[i] = 1-10/this.y[i];
        }
        if(this.alive[i] && this.y[i] <this.r[i]){
            this.alive[i] = false;
            this.full[i]  = false;
            this.r[i]     = 0;
            data.life--;
            if(data.life<=0){
                data.gameover = true;
                data.life = 0;
            }
        }
        if(this.alive[i]){
            ctx2.beginPath();
            ctx2.strokeStyle = randomColor()+this.al[i]+")";
            ctx2.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx2.closePath();
            ctx2.stroke();
        }

    }
    ctx2.restore();
}

function numControl() {
    var count = 0;
    for (var i=0;i<bubble.num;i++){
        if(bubble.alive[i]){
            count++;
        }
    }
    if(count < big.limit){
        sentBubble();
        return;
    }
}

function sentBubble() {
    for(var i=0;i<bubble.num;i++){
        if(!bubble.alive[i]){
            bubble.born(i);
            return;
        }
    }
}