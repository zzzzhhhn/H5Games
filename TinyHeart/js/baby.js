/**
 * Created by zoramac on 2017/2/8.
 */
/**
 * Created by zoramac on 2017/2/8.
 */
var babyObj = function () {
    this.x;
    this.y;
    this.angle;
    this.babyBody= new Image();
    this.babyTailTimer = 0;
    this.babyTailCount = 0;
    this.babyEyeTimer  = 0;
    this.babyEyeCount  = 0;
    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
}
babyObj.prototype.init = function () {
    this.x = canWidth*0.5;
    this.y = canHeight*0.5;
    this.angle = 0;
    this.babyBody.src= "./src/babyFade0.png";
}
babyObj.prototype.draw = function () {
    this.x = lerpDistance(mom.x,this.x,0.99);
    this.y = lerpDistance(mom.y,this.y,0.99);

    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta   = Math.atan2(deltaY,deltaX) + Math.PI;

    this.angle = lerpAngle(beta,this.angle,0.95);

    this.babyTailTimer += deltaTime;
    this.babyEyeTimer  += deltaTime;
    this.babyBodyTimer += deltaTime;
    if(this.babyTailTimer > 25){
        this.babyTailCount=(this.babyTailCount + 1)%8;
        this.babyTailTimer %=25;
    }
    if(this.babyEyeTimer >500){
        this.babyEyeCount =(this.babyEyeCount  + 1)%2;
        this.babyEyeTimer%=500;
    }
    if(this.babyBodyTimer > 300){
        this.babyBodyCount = (this.babyBodyCount + 1);
        this.babyBodyTimer%=300;
        if(this.babyBodyCount >= 19){
            this.babyBodyCount = 19;
            data.gameOver = true;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    ctx1.drawImage(babyBody[this.babyBodyCount],-babyBody[this.babyBodyCount].width*0.5,-babyBody[this.babyBodyCount].height*0.5);
    ctx1.drawImage(babyEye[this.babyEyeCount],-babyEye[this.babyEyeCount].width*0.5,-babyEye[this.babyEyeCount].height*0.5);
    ctx1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width*0.5+23,-babyTail[this.babyTailCount].height*0.5);
    ctx1.restore();
}