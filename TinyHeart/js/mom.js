/**
 * Created by zoramac on 2017/2/8.
 */
var momObj = function () {
    this.x;
    this.y;
    this.angle;
    this.bigTailTimer = 0;
    this.bigTailCount = 0;
    this.bigEyeTimer  = 0;
    this.bigEyeCount  = 0;
    this.bigBodyCount = 0;
    this.c            ="";
    this.bodyPic;
    this.bigEyeInterval = 2000;
}
momObj.prototype.init = function () {
    this.x = canWidth*0.5;
    this.y = canHeight*0.5;
    this.angle = 0;
}
momObj.prototype.draw = function () {
     this.x = lerpDistance(mx,this.x,0.99);
     this.y = lerpDistance(my,this.y,0.99);

     var deltaY = my - this.y;
     var deltaX = mx - this.x;
     var beta   = Math.atan2(deltaY,deltaX) + Math.PI;

     this.angle = lerpAngle(beta,this.angle,0.95);
     this.bigTailTimer += deltaTime;
     this.bigEyeTimer  += deltaTime;
     if(this.bigTailTimer > 50){
         this.bigTailCount = (this.bigTailCount + 1)%8;
         this.bigTailTimer %= 50;
     }

     if(this.bigEyeTimer >this.bigEyeInterval){
         this.bigEyeCount = (this.bigEyeCount + 1)%2;
         this.bigEyeTimer %=this.bigEyeInterval;
         if(this.bigEyeCount == 0){
             this.bigEyeInterval = 2000 + Math.random()*3000;
         }else {
             this.bigEyeInterval = 200;
         }
     }
     if(this.c == "blue"){
        this.bodyPic  = bigBodyB;
     }else {
         this.bodyPic = bigBodyO;
     }
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bodyPic[this.bigBodyCount],-this.bodyPic[this.bigBodyCount].width*0.5,-this.bodyPic[this.bigBodyCount].height*0.5);
    ctx1.drawImage(bigTail[this.bigTailCount],-bigTail[this.bigTailCount].width*0.5+30,-bigTail[this.bigTailCount].height*0.5);
    ctx1.drawImage(bigEye[this.bigEyeCount],-bigEye[this.bigEyeCount].width*0.5,-bigEye[this.bigEyeCount].height*0.5);
    ctx1.restore();
}