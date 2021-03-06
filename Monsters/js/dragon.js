/**
 * Created by Zora on 2017/6/10.
 */
var dragonObj = function () {
    this.x = [];
    this.y = [];
    this.planX = [];
    this.planY = [];
    this.alive = [];
    this.Pic = [];
    this.num;
    this.limit;
    this.front = [];
    this.PicCount = [];
    this.delta = [];
    this.frontDel = [];
    this.full = [];
    this.sjDel = [];
    this.grassCost;
    this.sjCost;
    this.sjDelTime;
    this.grassCost = 100;
    this.sjCost = 50;
    this.sjDelTime = 10*1000;
    this.fight = [];
    this.life = [];
    this.bg = [];
    this.aim = [];
    this.aimX = [];
    this.aimY = [];
}

dragonObj.prototype.init = function () {
    this.num = 10;
    this.limit = 0;
    for (var i=0;i<this.num;i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.front[i] = "left";
        this.Pic[i] = dragonPicl;
        this.PicCount[i] = 0;
        this.delta[i] = 0;
        this.frontDel[i] = 0;
        this.full[i] = false;
        this.planX[i] = 0;
        this.planY[i] = 0;
        this.sjDel[i] = 0;
        this.fight[i] = false;
        this.life[i] = 200;
        this.bg[i] = 0;
        this.aim[i] = '';
        this.aimX[i] = 0;
        this.aimY[i] = 0;
    }
}

dragonObj.prototype.draw = function () {
    for (var i=0;i<this.num;i++) {
        if(this.full[i]) {
            this.delta[i] += deltaTime;
            if(this.delta[i] > 50) {
                this.PicCount[i] = (this.PicCount[i] + 1)%4;
                this.delta[i] %= 50;
            }
            this.sjDel[i] += deltaTime;
            if(this.sjDel[i]>this.sjDelTime) {
                for(var j=0;j<sj.num;j++) {
                    if(!sj.alive[j] && this.alive[i]) {
                        sj.born(j,this.planX[i]+Math.random()*100,this.planY[i]+70);
                        break;
                    }
                }
                this.sjDel[i] %= this.sjDelTime;

            }
            var limit = 2000 + Math.random()*2000;
            this.frontDel[i] += deltaTime;
            if(this.frontDel[i] > limit) {
                var m = Math.random();
                if(m<0.25) {
                    this.front[i] = 'front';
                }else if(m>=0.25 && m<0.5) {
                    this.front[i] = 'back';
                }else if(m>=0.5 && m<0.75) {
                    this.front[i] = 'left';
                }else if(m>=0.75) {
                    this.front[i] = 'right';
                }
                this.frontDel[i] %= limit;
            }
            if(this.front[i] == 'front') {
                this.y[i] ++;
            }else if(this.front[i] == 'back') {
                this.y[i] --;
            }else if(this.front[i] == 'left') {
                this.x[i] --;
                this.Pic = dragonPicl;
            }else if(this.front[i] == 'right') {
                this.x[i] ++;
                this.Pic = dragonPicr;
            }
            if(this.x[i] < (this.planX[i]-100)) {
                this.front[i] = 'right';
            }
            if(this.x[i] > (this.planX[i]+100)) {
                this.front[i] = 'left';
            }
            if(this.y[i] < (this.planY[i]-100)) {
                this.front[i] = 'front';
            }
            if(this.y[i] > (this.planY[i]+100)) {
                this.front[i] = 'back';
            }
            for(var j=0;j<knight.num;j++) {
                if(!this.fight[i] &&(knight.x[j]>=this.planX[i]-200) &&(knight.x[j]<=this.planX[i]+300)&&(knight.y[j]>=this.planY[i]-200)&&(knight.y[j]<=this.planY[i]+300)&&knight.alive[j]) {
                    this.aim[i] = j;
                    this.fight[i] = true;
                }
            }
            if(this.aim[i]!=='') {
                this.aimX[i] = knight.x[this.aim[i]];
                this.aimY[i] = knight.y[this.aim[i]];
            }

            if(this.fight[i] ) {
                this.x[i] = lerpDistance(this.aimX[i],this.x[i],0.995);
                this.y[i] = lerpDistance(this.aimY[i],this.y[i],0.995);

                for (var j=0;j<knight.num;j++) {
                    const l = calLength2(knight.x[j],knight.y[j],this.x[i]+50,this.y[i]+50);
                    if(l<=900) {
                        knight.life[j]--;
                        if(knight.life[j]<=0) {
                            knight.die(j);
                            this.fight[i] = false;
                        }
                    }
                }

            }
            if(this.alive[i]) {
                ctx2.save();
                ctx1.drawImage(dragonPlan,this.planX[i],this.planY[i],100,100);
                ctx2.drawImage(this.Pic[this.PicCount[i]],this.x[i],this.y[i],65,100);
                ctx2.restore();
                ctx2.save();
                ctx2.strokeStyle = "blue";
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
                ctx2.lineTo(this.x[i]+70*this.life[i]/1000,this.y[i]-20);
                ctx2.closePath();
                ctx2.stroke();
                ctx2.restore();
            }

        }
        if(!this.full[i] && this.alive[i]) {
            this.delta[i] += deltaTime;
            if(this.delta[i] > 5000) {
                this.full[i] = true;
                this.delta[i] = 0;
                this.life[i] = 1000;
            }
            ctx2.save();
            ctx2.drawImage(dragonEgg,this.x[i],this.y[i],100,100);
            ctx2.restore();
            ctx2.save();
            ctx2.strokeStyle = "blue";
            ctx2.globalAlpha = 0.7;
            ctx2.lineWidth = 10;
            ctx2.lineCap = "round";
            ctx2.shadowBlur = 10;
            ctx2.shadowColor = "white";
            ctx2.font = "20px Verdana";
            ctx2.fillStyle = "white";
            ctx2.textAlign = "center";
            ctx2.beginPath();
            ctx2.moveTo(this.x[i]+40,this.y[i]-20);
            ctx2.lineTo(this.x[i]+40+20*this.life[i]/200,this.y[i]-20);
            ctx2.closePath();
            ctx2.stroke();
            ctx2.restore();
        }
    }
}

dragonObj.prototype.born = function(i) {
    this.x[i] = cx;
    this.y[i] = cy;
    this.alive[i] = true;
    this.front[i] = 'front';
    this.Pic = dragonPicl;
    this.PicCount[i] = 0;
    this.delta[i] = 0;
    this.full[i] = false;
    this.planX[i] = cx;
    this.planY[i] = cy;
    bg.over[bg.cbg] = 'dragon';
    data.limit++;
    this.fight[i] = false;
    this.life[i] = 200;
    this.bg[i] = bg.cbg;
}
dragonObj.prototype.die = function (i) {
    this.alive[i] = false;
    data.limit--;
    this.fight[i] = false;
    bg.over[bg.cbg] = '';
    bg.occupied[this.bg[i]] = false;
    this.limit--;
}
function dragonControl() {
    var count = 0;
    for(var i=0;i<dragon.num;i++) {
        if(dragon.alive[i]) {
            count ++;
        }
    }
    if(count<dragon.limit) {
        dragonBorn();
    }
}

function dragonBorn() {
    for(var i=0; i<dragon.num;i++) {
        if(!dragon.alive[i]) {
            dragon.born(i);
            return;
        }
    }
}