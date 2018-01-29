/**
 * Created by Zora on 2017/6/4.
 */
var farmerObj = function () {
    this.Pic;
    this.PicCount = [];
    this.x   = [];
    this.y   = [];
    this.front = [];//方向
    this.alive = [];
    this.delta = [];
    this.frontDel = [];
    this.working = [];
    this.holding = [];
    this.aimX = [];
    this.aimY = [];
    this.grass = [];
    this.colletDel = [];
    this.show = [];
    this.tree = [];
    this.colleted = [];
}

farmerObj.prototype.init = function () {
    this.num = 2;
    for (var i=0;i<this.num;i++) {
        this.x[i] = 500;
        this.y[i] = 300;
        this.alive[i] = false;
        this.front[i] = 'front';
        this.Pic = farmerF;
        this.PicCount[i] = 0;
        this.delta[i] = 0;
        this.frontDel[i] = 0;
        this.working[i] = false;
        this.holding[i] = false;
        this.aimX[i] = 0;
        this.aimY[i] = 0;
        this.grass[i] = 0;
        this.tree[i] = 0;
        this.colletDel[i] = 0;
        this.show[i] = false;
        this.colleted[i] = '';
    }
}

farmerObj.prototype.draw = function () {
    for (var i=0;i<this.num;i++) {
        var houseX1 = bg.x[41];
        var houseX2 = houseX1 + 90;
        var houseY1 = bg.y[41];
        var houseY2 = houseY1 +90;
        if(this.x[i] > houseX1 && this.x[i] < houseX2 && this.y[i] > houseY1 && this.y[i] < houseY2) {
            this.show[i] = false;
        }else {
            this.show[i] = true;
        }
        this.delta[i] += deltaTime;
        if(this.delta[i] > 50) {
            this.PicCount[i] = (this.PicCount[i] + 1)%4;
            this.delta[i] %= 50;
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
            this.Pic = farmerF;
        }else if(this.front[i] == 'back') {
            this.y[i] --;
            this.Pic = farmerB;
        }else if(this.front[i] == 'left') {
            this.x[i] --;
            this.Pic = farmerL;
        }else if(this.front[i] == 'right') {
            this.x[i] ++;
            this.Pic = farmerR;
        }
        if(this.x[i] < 100) {
            this.front[i] = 'right';
        }
        if(this.x[i] > (W-100)) {
            this.front[i] = 'left';
        }
        if(this.y[i] < 100) {
            this.front[i] = 'front';
        }
        if(this.y[i] > (H-100)) {
            this.front[i] = 'back';
        }
        for(var j=0;j<tree.num;j++) {
            if(tree.alive[j] && !this.working[i] && !tree.collected[j]) {
                this.working[i] = true;
                tree.collected[j] = true;
                this.aimX[i] = tree.x[j]+20;
                this.aimY[i] = tree.y[j]+50;
                this.tree[i] = j;
                this.colleted[i] = 'tree';
                break;
            }
        }
        for(var j=0;j<grass.num;j++) {
            if(grass.alive[j] && !this.working[i] && !grass.collected[j]) {
                this.working[i] = true;
                grass.collected[j] = true;
                this.aimX[i] = grass.x[j];
                this.aimY[i] = grass.y[j];
                this.grass[i] = j;
                this.colleted[i] = 'grass';
                break;
            }
        }



        if(this.working[i]) {
            this.x[i] = lerpDistance(this.aimX[i],this.x[i],0.995);
            this.y[i] = lerpDistance(this.aimY[i],this.y[i],0.995);
            const l = calLength2(this.aimX[i],this.aimY[i],this.x[i],this.y[i]);
            if(l<=900 && !this.holding[i]) {

                if(this.colleted[i] === 'grass') {
                    this.colletDel[i] += deltaTime;
                    if(this.colletDel[i]>1500) {
                        this.holding[i] = true;
                        grass.alive[this.grass[i]] = false;
                        grass.limit--;
                        bg.occupied[this.grass[i]] = false;
                        this.aimX[i] = house.x+housePic[house.level].width*0.5;
                        this.aimY[i] = house.y+housePic[house.level].height*0.5;
                        this.colletDel[i] = 0;
                    }
                }


                if(this.colleted[i] === 'tree') {
                    this.colletDel[i] += deltaTime;
                    if(this.colletDel[i]>5000) {
                        this.holding[i] = true;
                        tree.alive[this.tree[i]] = false;
                        tree.limit--;
                        bg.occupied[this.tree[i]] = false;
                        this.aimX[i] = house.x+housePic[house.level].width*0.5;
                        this.aimY[i] = house.y+housePic[house.level].height*0.5;
                        this.colletDel[i] = 0;
                    }
                }



            }
            const l2 = calLength2(this.aimX[i],this.aimY[i],this.x[i],this.y[i]);
            if(l2<=900 && this.holding[i]) {
                this.holding[i] = false;
                this.working[i] = false;
                if(this.colleted[i]==='grass')
                data.grassCount++;
                if(this.colleted[i]==='tree')
                    data.grassCount += 3;
                // ctx2.drawImage(sjPic,sj.x+housePic[sj.level].width*0.5,sj.y-10,15,30);
                return;
            }
            if(data.gameover) {
                this.aimX[i] = -100;
                this.aimY[i] = -100;
                this.front[i] = 'left';
            }
            if(this.aimX[i] - this.x[i] >10) {
                this.front[i] = 'right';
            }
            if(this.x[i] - this.aimX[i] >10) {
                this.front[i] = 'left';
            }
            if(this.aimY[i] - this.y[i] >10) {
                this.front[i] = 'front';
            }
            if(this.y[i] - this.aimY[i] >10) {
                this.front[i] = 'back';
            }

        }



        if(this.alive[i] && this.show[i]) {
            ctx2.save();
            ctx2.drawImage(this.Pic[this.PicCount[i]],this.x[i],this.y[i]);
            ctx2.restore();
        }

    }
}

farmerObj.prototype.born = function(i) {
    this.x[i] = 550;
    this.y[i] = 350;
    this.alive[i] = true;
    this.show[i] = true;
    this.front[i] = 'front';
    this.Pic = farmerF;
    this.PicCount[i] = 0;
    this.delta[i] = 0;
    this.holding[i] = false;
    this.colletDel[i] = 0;
}

function farmerControl() {
    var count = 0;
    for(var i=0;i<farmer.num;i++) {
        if(farmer.alive[i]) {
            count ++;
        }
    }
    if(count<farmer.num) {
        farmerBorn();
    }
}

function farmerBorn() {
    for(var i=0; i<farmer.num;i++) {
        if(!farmer.alive[i]) {
            farmer.born(i);
            return;
        }
    }
}