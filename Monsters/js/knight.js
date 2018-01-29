/**
 * Created by Zora on 2017/6/4.
 */
var knightObj = function () {
    this.Pic;
    this.PicCount = [];
    this.x   = [];
    this.y   = [];
    this.front = [];//方向
    this.alive = [];
    this.delta = [];
    this.aim = [];
    this.dragon = [];
    this.fish = [];
    this.slm = [];
    this.mogu = [];
    this.fight = [];
    this.life = [];
    this.aimX = [];
    this.aimY = [];
    this.lx = [];
    this.ly = [];
}

knightObj.prototype.init = function () {
    this.num = 0;
    for (var i=0;i<this.num;i++) {
        this.x[i] = bg.x[89] + Math.random()*200;
        this.y[i] = bg.y[89] + 100;
        this.alive[i] = false;
        this.front[i] = 'front';
        this.Pic = knightF;
        this.PicCount[i] = 0;
        this.delta[i] = 0;
        this.aim[i] = '';
        this.dragon[i] = 0;
        this.fish[i] = 0;
        this.slm[i] = 0;
        this.mogu[i] = 0;
        this.fight[i] = false;
        this.life[i] = 100;
        this.aimX[i] = 0;
        this.aimY[i] = 0;
        this.lx[i] = 0;
        this.ly[i] = 0;
    }
}

knightObj.prototype.draw = function () {
    for (var i=0;i<this.num;i++) {
        this.delta[i] += deltaTime;
        if(this.delta[i] > 50) {
            this.PicCount[i] = (this.PicCount[i] + 1)%4;
            this.delta[i] %= 50;
        }
        if(this.front[i] == 'front') {
            this.y[i] ++;
            this.Pic = knightF;
            this.ly[i] = -100*Math.random();
            this.lx[i] = 50*Math.random();
        }else if(this.front[i] == 'back') {
            this.y[i] --;
            this.Pic = knightB;
            this.ly[i] = 100*Math.random();
            this.lx[i] = 50*Math.random();
        }else if(this.front[i] == 'left') {
            this.x[i] --;
            this.Pic = knightL;
            this.lx[i] = -100*Math.random();
            this.ly[i] = 50*Math.random();
        }else if(this.front[i] == 'right') {
            this.x[i] ++;
            this.Pic = knightR;
            this.lx[i] = 100*Math.random();
            this.ly[i] = 50*Math.random();
        }

        for(var j=0;j<slm.num;j++) {
            if(slm.alive[j] && !this.fight[i]) {
                this.fight[i] = true;
                this.aimX[i] = slm.x[j];
                this.aimY[i] = slm.y[j];
                this.slm[i] = j;
                this.aim[i] = 'slm';
                break;
            }
        }
        for(var j=0;j<mogu.num;j++) {
            if(mogu.alive[j] && !this.fight[i]) {
                this.fight[i] = true;
                this.aimX[i] = mogu.x[j];
                this.aimY[i] = mogu.y[j];
                this.mogu[i] = j;
                this.aim[i] = 'mogu';
                break;
            }
        }
        for(var j=0;j<fish.num;j++) {
            if(fish.alive[j] && !this.fight[i]) {
                this.fight[i] = true;
                this.aimX[i] = fish.x[j]+20;
                this.aimY[i] = fish.y[j]+50;
                this.fish[i] = j;
                this.aim[i] = 'fish';
                break;
            }
        }
        for(var j=0;j<dragon.num;j++) {
            if(dragon.alive[j] && !this.fight[i]) {
                this.fight[i] = true;
                this.aimX[i] = dragon.x[j];
                this.aimY[i] = dragon.y[j];
                this.dragon[i] = j;
                this.aim[i] = 'dragon';
                break;
            }
        }
        if(this.aim[i]==='slm') {
            this.aimX[i] = slm.x[this.slm[i]] + 100*Math.random();
            this.aimY[i] = slm.y[this.slm[i]] + 100*Math.random();
            if(!slm.alive[this.slm[i]]) {
                this.fight[i] = false;
                this.aim[i] = '';
            }
        }else if(this.aim[i]==='mogu') {
            this.aimX[i] = mogu.x[this.mogu[i]] + this.lx[i];
            this.aimY[i] = mogu.y[this.mogu[i]] + this.ly[i];
            if(!mogu.alive[this.mogu[i]]) {
                this.fight[i] = false;
                this.aim[i] = '';
            }
        }else if(this.aim[i]==='fish') {
            this.aimX[i] = fish.x[this.fish[i]] + this.lx[i];
            this.aimY[i] = fish.y[this.fish[i]] + this.ly[i];
            if(!fish.alive[this.fish[i]]) {
                this.fight[i] = false;
                this.aim[i] = '';
            }
        }else if(this.aim[i]==='dragon') {
            this.aimX[i] = dragon.x[this.dragon[i]] + this.lx[i];
            this.aimY[i] = dragon.y[this.dragon[i]] + this.ly[i];
            if(!dragon.alive[this.dragon[i]]) {
                this.fight[i] = false;
                this.aim[i] = '';
            }
        }else {
            this.aim[i] = 'house';
            this.fight[i] = true;
            this.aimX[i] = house.x+housePic[house.level].width*0.5;
            this.aimY[i] = house.y+housePic[house.level].height*0.5;
        }

        if(this.fight[i] ) {
            this.x[i] = lerpDistance(this.aimX[i],this.x[i],0.995);
            this.y[i] = lerpDistance(this.aimY[i],this.y[i],0.995);
            const l = calLength2(this.aimX[i],this.aimY[i],this.x[i],this.y[i]);
            if(l<=900) {

                if(this.aim[i] === 'slm'&& slm.alive[this.slm[i]]  && this.alive[i]) {
                   slm.life[this.slm[i]]--;
                   if(slm.life[this.slm[i]]<=0  && this.life[i] >=0) {
                       slm.die(this.slm[i]);
                       this.fight[i] = false;
                   }
                }


                if(this.aim[i] === 'mogu' && this.alive[i] && mogu.alive[this.mogu[i]]) {
                    mogu.life[this.mogu[i]]--;
                    if(mogu.life[this.mogu[i]]<=0 && this.life[i] >=0 ) {
                        mogu.die(this.mogu[i]);
                        this.fight[i] = false;
                    }
                }

                if(this.aim[i] === 'fish' && this.alive[i] && fish.alive[this.fish[i]]) {
                    fish.life[this.fish[i]]--;
                    if(fish.life[this.fish[i]]<=0  && this.life[i] >=0) {
                        fish.die(this.fish[i]);
                        this.fight[i] = false;
                    }
                }
                if(this.aim[i] === 'dragon'&& this.alive[i] && dragon.alive[this.dragon[i]] ) {
                    dragon.life[this.dragon[i]]--;
                    if(dragon.life[this.dragon[i]]<=0 && this.life[i] >=0 ) {
                        dragon.die(this.dragon[i]);
                        this.fight[i] = false;
                    }
                }
                if(this.aim[i]==='house') {
                    house.life--;
                    if(house.life<=0) {
                        house.life = 0;
                        house.alive = false;
                        data.gameover = true;
                    }
                }


            }

            if(this.aimX[i] - this.x[i] >=50) {
                this.front[i] = 'right';
            }
            if(this.x[i] - this.aimX[i] >=50) {
                this.front[i] = 'left';
            }
            if(this.aimY[i] - this.y[i] >=50) {
                this.front[i] = 'front';
            }
            if(this.y[i] - this.aimY[i] >=50) {
                this.front[i] = 'back';
            }

        }



        if(this.alive[i]) {
            ctx2.save();
            ctx2.drawImage(this.Pic[this.PicCount[i]],this.x[i],this.y[i]);
            ctx2.restore();
            ctx2.save();
            ctx2.strokeStyle = "red";
            ctx2.globalAlpha = 0.7;
            ctx2.lineWidth = 10;
            ctx2.lineCap = "round";
            ctx2.shadowBlur = 10;
            ctx2.shadowColor = "white";
            ctx2.font = "20px Verdana";
            ctx2.fillStyle = "white";
            ctx2.textAlign = "center";
            ctx2.beginPath();
            ctx2.moveTo(this.x[i],this.y[i]-20);
            ctx2.lineTo(this.x[i]+30*this.life[i]/100,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();
        }

    }
}

knightObj.prototype.born = function(i) {
    this.x[i] = 500 + Math.random()*200;
    this.y[i] = 800;
    this.alive[i] = true;
    this.front[i] = 'back';
    this.Pic = knightF;
    this.PicCount[i] = 0;
    this.delta[i] = 0;
    this.fight[i]  =false;
    this.life[i] = 100;
}
knightObj.prototype.die = function (i) {
    this.life[i] = 0;
    this.alive[i] = false;
    this.fight[i] = false;
    this.num--;
}

function knightControl() {
    if(data.attact) {
        var count = 0;
        for(var i=0;i<knight.num;i++) {
            if(knight.alive[i]) {
                count ++;
            }
        }
        if(count<knight.num) {
            knightBorn();
        }
    }

}

function knightBorn() {
    for(var i=0; i<knight.num;i++) {
        if(!knight.alive[i]) {
            knight.born(i);
            return;
        }
    }
}