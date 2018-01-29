/**
 * Created by Zora on 2017/2/8.
 */
var fruitObj = function () {
    this.alive = [];
    this.x = [];//横坐标
    this.y = [];//纵坐标
    this.s = [];//大小
    this.spd = [];//速度
    this.c = [];//颜色
    this.full = [];//成熟度
    this.aneNo = [];//出生点
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
    for(var i=0; i<this.num;i++){
        this.alive[i] = false;
        this.full[i]  = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.s[i] = 0;
        this.c[i] = "";
        this.aneNo[i]= 0;
        this.spd[i] = Math.random()*0.03 + 0.03;
        var rad = Math.random();
        if(rad < 0.1){
            this.c[i] = 'blue';
        }else {
            this.c[i] = 'orange';
        }

        //this.born(i);
    }

    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function () {
    for(var i=0;i<this.num;i++){
        if(this.alive[i] == true){
            if(this.c[i] == 'blue'){
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
            if(this.s[i]<15){
                this.s[i] += this.spd[i]*deltaTime*0.09;
                this.x[i]     = ane.headX[this.aneNo[i]];
            }else{
                this.y[i] -= this.spd[i]*deltaTime;
                this.full[i]  = true;
            }
            ctx2.drawImage(pic,this.x[i]-this.orange.width*0.3,this.y[i],this.s[i],this.s[i]);
            if(this.y[i] < 10){
                this.alive[i] = false;
                this.s[i] = 0;
                this.full[i] =false;
            }
        }

    }
}
// fruitObj.prototype.update = function () {
//     var num = 0;
//     for(var i=0;i<this.num;i++){
//
//     }
// }
fruitObj.prototype.born = function (d) {
    this.aneNo[d]= Math.floor(Math.random()*ane.num);
    this.x[d] = ane.headX[this.aneNo[d]];
    this.y[d] = ane.headY[this.aneNo[d]]+ Math.random()*20;
    this.alive[d] = true;
}
fruitObj.prototype.die= function (i) {
    if(this.alive[i]){
        this.alive[i] = false;
        this.s[i] = 0;
        this.full[i] =false;
    }
}
function countControl() {
    var count = 0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            count ++;
        }
    }
    if (count < 15){
        sendFruit();
        return;
    }
}
function sendFruit() {
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}
