/**
 * Created by Zora on 2017/6/10.
 */
var houseObj = function () {
    this.x;
    this.y;
    this.level;
    this.grassCost;
    this.sjCost;
    this.limit;
    this.life;
    this.alive;
}
houseObj.prototype.init = function () {
    this.level = 1;
    this.x = bg.x[41];
    this.y = bg.y[41];
    this.grassCost = 50;
    this.sjCost = 10;
    this.limit = 10;
    this.life = 10000;
    this.alive = true;
}

houseObj.prototype.draw = function () {
    if(this.level==2) {
        this.grassCost = 100;
        this.sjCost = 50;
        this.limit = 20;
        farmer.num = 3;
        maid.num =3;
        grass.growDel = 1000*4 + Math.random()*1000;
        this.life = 15000;
    }
    if(this.level==3) {
        this.grassCost = 300;
        this.sjCost = 100;
        this.limit = 30;
        farmer.num = 5;
        maid.num = 5;
        grass.growDel = 1000*3 + Math.random()*1000;
        this.life = 20000;
    }
    if(this.level==4) {
        this.grassCost = 500;
        this.sjCost = 200;
        this.limit = 40;
        farmer.num = 8;
        maid.num = 8;
        grass.growDel = 1000*2 + Math.random()*1000;
        this.life = 25000;
    }
    if(this.level==5) {
        this.grassCost = 1000;
        this.sjCost = 300;
        this.limit = 50;
        farmer.num = 10;
        maid.num = 10;
        grass.growDel = 1000 + Math.random()*1000;
        this.life = 30000;
    }
    if(this.alive) {
        ctx2.save();
        ctx2.drawImage(housePic[this.level],this.x,this.y,100,100);
        ctx2.restore();
    }
}

var levelUp = function () {
    if(house.level<5) {
        house.level++;
    }

}