/**
 * Created by zoramac on 2017/2/8.
 *
 *
 */
var ckObj = function () {
    this.x;
    this.y;
    this.ckTimer = 0;
    this.ckCount = 0;
    this.Left = false;
    this.Up = false;
    this.Right = false;
    this.Down = false;
    this.dir  = 'left';
    this.ck;
    this.wd  = false;
    this.wdtime = 5000;
    this.hit = false;
    this.jump = false;
    this.onGround = true;
    this.currentY = 0;
    this.run = false;
    this.skill = false;
    this.flash =false;
    this.dps = 10;
}
ckObj.prototype.init = function () {
    this.x = W*0.5;
    this.y = H*0.5;
    this.sp = 5;
}
ckObj.prototype.draw = function () {
    if(!data.gameover) {
        if (!this.run && !this.jump && !this.skill && this.dir == 'left') {
            this.ck = standPicl;
        }
        if (!this.run && !this.jump && !this.skill && this.dir == 'right') {
            this.ck = standPicr;
        }
        this.ckTimer += deltaTime;
        if (this.run) {
            if (this.dir == 'left') {
                this.ck = ckPicl;
            } else {
                this.ck = ckPicr;
            }
        }
        if (this.ckTimer > 80) {
            this.ckCount = (this.ckCount + 1) % 8;
            this.ckTimer %= 80;
        }
        if (this.Left) {
            this.x -= this.sp;
        }
        if (this.Right) {
            this.x += this.sp;
        }
        if (this.Up) {
            this.y -= this.sp;
        }
        if (this.Down) {
            this.y += this.sp;
        }
        if (this.y == this.currentY) {
            this.onGround = true;
        }
        if (this.jump && this.onGround) {
            if (this.dir == 'left') {
                this.ck = jumpPicl;
            } else {
                this.ck = jumpPicr;
            }

            this.y -= 10;
            if (this.y <= this.currentY - 150) {
                this.jump = false;
                this.onGround = false;
            }
        }
        if (!this.jump && !this.onGround) {
            this.y += 10;
            if (this.y >= this.currentY) {
                this.y = this.currentY;
            }
        }
        if (this.skill) {
            if (this.dir == 'left') {
                this.ck = skillPicl;
            } else {
                this.ck = skillPicr;
            }
        }
        if(this.hit){
            if(this.dir == 'left'){
                this.ck = hitPicl;
            }else {
                this.ck = hitPicr;
            }
        }

        if(this.flash){
            this.x = Math.random()*W;
            this.y = Math.random()*H;
            this.flash = false;
        }
        if(!hitPicl[this.ckCount]){
            this.hit = false;
        }
        if(!skillPicl[this.ckCount]){
            this.skill = false;
        }
        ctx2.save();
        if(this.wd){
            ctx2.shadowBlur=10;
            ctx2.shadowColor=randomColor()+"1)";
            this.wdtime -= deltaTime;
            if(this.wdtime<=0){
                this.wd = false;
            }
        }
        if(this.y<30) {
            this.jump = false;
        }
        if(this.ck[this.ckCount]){
            ctx2.drawImage(this.ck[this.ckCount],this.x,this.y,100,150);
        }
    }
    if(this.x < 0){
        this.x = 0;
    }
    if(this.x > W-ckPicl[0].width){
        this.x = W-ckPicl[0].width;
    }
    if(this.y < 0){
        this.y = 0;
    }
    if(this.y > H-ckPicl[0].height){
        this.y = H-ckPicl[0].height;
    }

    if(data.gameover) {
        ctx2.drawImage(mbPic,this.x,this.y,100,150);
    }
    ctx2.restore();


    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.restore();
    ctx2.save();
    ctx2.beginPath();
    ctx2.strokeStyle = "black";
    ctx2.fillStyle = "rgba(200,200,200,0.5)";
    ctx2.arc(325, H - 75, 25, 0, Math.PI * 2);

    ctx2.fill();
    ctx2.closePath();
    ctx2.stroke();
    ctx2.restore();
    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("X",275,H-20,20,20);
    ctx2.fillText("C",325,H-20,20,20);
    ctx2.restore();
    ctx2.drawImage(hitLogo,250,H-100,50,50);
    ctx2.drawImage(jumpLogo,315,H-100,25,50);
}
ckObj.prototype.moveLeft = function () {
    this.Left = true;
    this.dir  = 'left';
    this.run = true;
}

ckObj.prototype.moveRight = function () {
    this.Right = true;
    this.dir   = 'right';
    this.run = true;
}
ckObj.prototype.moveUp = function () {
    this.Up = true;
    this.run = true;
}

ckObj.prototype.moveDown = function () {
    this.Down = true;
    this.run = true;
}
ckObj.prototype.stopLeft = function () {
    this.Left = false;
    this.run = false;
}

ckObj.prototype.stopRight = function () {
    this.Right = false;
    this.run = false;
}
ckObj.prototype.stopUp = function () {
    this.Up = false;
    this.run = false;
}

ckObj.prototype.stopDown = function () {
    this.Down = false;
    this.run = false;
}
ckObj.prototype.hiting = function () {
    this.hit = true;
    this.ckCount = 0;

    for(var i=0;i<js.num;i++){
        var lx = ck.x - js.x[i];
        var ly = ck.y -js.y[i];
        if(js.alive[i]&&ly<20&&ly>-20) {
            //var l1 = calLength2(js.x[i]+jsPicl[0].width*0.5,js.y[i]+jsPicl[0].height*0.5,ck.x+hitPicl[0].width*0.5,ck.y+hitPicl[0].height*0.5);

            if(lx>0&&ck.dir == 'left') {
                    js.blood[i] -= ck.dps;
                    js.x[i] -=20;
                    return;
                }

            }
        if (lx<0&&ck.dir != 'left') {
            js.blood[i] -= ck.dps;
            js.x[i] +=0;
            return;
        }

    }

}
ckObj.prototype.jumping = function () {
    this.currentY = this.y;
    this.ckCount = 0;
    if(this.y==this.currentY){
        this.jump = true;

    }

}
ckObj.prototype.skilling = function () {
    this.skill = true;
    this.ckCount = 0;
    if(fire.live==false&&!fire.cding&&this.onGround&&data.magic>=fire.cost){
        if(this.dir == 'left'){
            fire.x = this.x-150;

        }else {
            fire.x = this.x +150;
        }
        fire.y =this.y;
        fire.live = true;
        fire.cding = true;
        data.magic -= fire.cost;
    }

}
ckObj.prototype.flashing = function () {
    if(flash.live==false&&!flash.cding&&data.magic>=flash.cost){
        flash.x = this.x;
        flash.y =this.y;
        flash.live = true;
        flash.cding = true;
        data.magic -= flash.cost;
        this.flash = true;
        this.ckCount = 0;
    }


}
ckObj.prototype.pkqing = function () {
    if(!pkq.cding){
        this.skill = true;
        this.ckCount = 0;
        if(!pkq.live&&this.onGround&&data.magic>=pkq.cost){
            if(this.dir == 'left'){
                pkq.x = this.x-100;
            }else {
                pkq.x = this.x +100;
            }
            pkq.dir = this.dir;
            pkq.y =this.y+50;
            pkq.live = true;
            pkq.cding = true;
            data.magic -= pkq.cost;
        }

    }

}
ckObj.prototype.chicking = function () {
    if(!chick.cding&&!boobom.cding){
        this.skill = true;
        this.ckCount = 0;
        if(!chick.live&&!boobom.live&&this.onGround&&data.magic>=chick.cost){
            if(this.dir == 'left'){
                chick.x = this.x-120;
                boobom.x = this.x-120;
            }else {
                chick.x = this.x +120;
                boobom.x = this.x +120;
            }
            chick.Count = 0;
            chick.dir = this.dir;
            chick.y =this.y+50;
            chick.live = true;
            chick.cding = true;
            boobom.Count = 0;
            boobom.dir = this.dir;
            boobom.y =this.y-200;
            boobom.live = true;
            boobom.cding = true;
            data.magic -= chick.cost;
        }

    }

}
ckObj.prototype.wining = function () {
    if(!win.cding){
        this.skill = true;
        this.ckCount = 0;
        if(!win.live&&this.onGround&&data.magic>=win.cost){
            if(this.dir == 'left'){
                win.x = this.x-120;
            }else {
                win.x = this.x +120;
            }
            win.dir = this.dir;
            win.y =this.y-50;
            win.live = true;
            win.cding = true;
            data.magic -= win.cost;
        }

    }

}
ckObj.prototype.bananaing = function () {
    if(!banana.cding){
        this.skill = true;
        this.ckCount = 0;
        if(!banana.live&&this.onGround&&data.magic>=banana.cost){
            if(this.dir == 'left'){
                banana.x = this.x-120;
            }else {
                banana.x = this.x +120;
            }
            banana.Count = 0;
            banana.dir = this.dir;
            banana.y =this.y+30;
            banana.live = true;
            banana.cding = true;
            data.magic -= banana.cost;
            data.life += 10;
            if(data.life>=data.lifeLimit) {
                data.life = data.lifeLimit;
            }
        }

    }

}
