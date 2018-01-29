/**
 * Created by Zora on 2017/2/12.
 */
var bubbleObj = function () {
    this.x = [];
    this.y = [];
    this.s = [];
    this.r = [];
    this.num = 50;
    this.alive = [];
    this.growing = [];
}

bubbleObj.prototype.init = function () {
    for (var i=0;i<this.num;i++) {
        this.x[i] = hmbb.x;
        this.y[i] = hmbb.y;
        this.s[i] = 20 + Math.random()*10;
        this.r[i] = 0;
        this.alive[i] = false;
        this.growing[i]  = false;
    }
}

bubbleObj.prototype.born = function (i) {
    this.alive[i]  = true;
    this.x[i] = hmbb.x;
    this.y[i] = hmbb.y;
    this.r[i]      = 0;
}

bubbleObj.prototype.die =function (i) {
    this.growing[i] = false;
    this.alive[i] = false;
    this.r[i]     = 0;
}

bubbleObj.prototype.draw = function () {

    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = randomColor() + "1)";
    ctx2.lineWidth = 2;
    for (var i=0;i<this.num;i++) {
        if (this.r[i] < this.s[i]) {
            if(hmbb.dir=="left"){
                this.x[i] = hmbb.x;
            }else{
                this.x[i] = hmbb.x + hmbbPic.width;
            }
            this.r[i] += deltaTime*0.02;
            this.growing[i] = true;

        } else {
            this.growing[i] = false;
            this.r[i] += deltaTime * 0.003;
            this.y[i] -= deltaTime * 0.2;
        }
        if(this.y[i]<this.r[i]){
            this.die(i);
        }
        if(hmbb.y<H-hmbb.h &&  this.growing[i]){
            this.alive[i] = false;
        }
        if(this.alive[i]){
            ctx2.beginPath();
            ctx2.strokeStyle = randomColor()+"1)";
            ctx2.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx2.closePath();
            ctx2.stroke();
        }


    }
    ctx2.restore();
}

function bubbleControl() {
    var count = 0;
    for (var i=0;i<bubble.num;i++) {
        if(bubble.alive[i] && bubble.growing[i]){
            count++;
        }
    }
    if(count<1){
        sentBubble();
        return;
    }
}

function sentBubble() {
    for (var i=0;i<bubble.num;i++) {
        if(!bubble.alive[i]){
            bubble.born(i);
            return;
        }
    }
}