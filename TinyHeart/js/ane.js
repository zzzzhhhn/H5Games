/**
 * Created by Zora on 2017/2/7.
 */
var aneObj = function () {
    this.rootX = [];
    this.headX = [];
    this.headY = [];
    this.al    = 0;
    this.amp   = [];
    this.num = 50;
    this.init = function () {
        for(var i=0;i<this.num;i++){
            this.rootX[i] = i*24 + Math.random()*20;
            this.headX[i] = this.rootX[i];
            this.headY[i] = canHeight - 300 + Math.random()*50;
            this.amp[i]   = 50 + Math.random()*50;
        }
    }
    this.draw = function () {
        this.al += deltaTime*0.0008;
        ctx2.save();
        ctx2.globalAlpha = 0.6;
        ctx2.lineWidth = 30;
        ctx2.lineCap = "round";
        ctx2.strokeStyle = "#3b154e";
        for(var i=0;i<this.num;i++){

            this.headX[i] = this.rootX[i] + Math.sin(this.al)*this.amp[i];
            ctx2.beginPath();
            ctx2.moveTo(this.rootX[i],canHeight);
            ctx2.quadraticCurveTo(this.rootX[i],canHeight-50,this.headX[i],this.headY[i])
            ctx2.stroke();
        }
        ctx2.restore();
    }
}
