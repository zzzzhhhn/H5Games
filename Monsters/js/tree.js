/**
 * Created by Zora on 2017/6/2.
 */
var treeObj = function () {
    this.x = [];
    this.y = [];
    this.num;
    this.limit;
    this.del;
    this.alive = [];
    this.collected = [];
    this.growDel;
}

treeObj.prototype.init = function () {
    this.num = bg.num;
    this.limit = 3;
    this.del = 0;
    this.growDel = 1000*10 + Math.random()*5000;
    for (var i=0;i<this.num;i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.collected[i] = false;
    }
}

treeObj.prototype.draw = function () {
    this.del += deltaTime;

    if(this.del > this.growDel) {
        tree.limit++;
        this.del %= this.growDel;
    }

    for (var i=0;i<this.num;i++) {
        if(this.alive[i]) {
            ctx1.drawImage(treePic,this.x[i],this.y[i],treePic.width,treePic.height);
        }

    }
}

treeObj.prototype.grow = function (i) {
    if(!bg.occupied[i]) {
        this.x[i] =bg.x[i] + Math.random()*50;
        this.y[i] = bg.y[i] + Math.random()*50;
        bg.occupied[i] = true;
        this.alive[i] = true;
        this.collected[i] = false;
        bg.over[i] = 'tree';
    }
}

treeObj.prototype.clean = function (i) {
    this.alive[i] = false;
    bg.occupied[i] = false;
}

function treeControl() {
    var count = 0;
    for (var i=0;i<tree.num;i++) {
        if(tree.alive[i]) {
            count++;
        }
    }
    if(count < tree.limit) {
        var i = Math.floor(Math.random()*bg.num);
        if(!tree.alive[i] && !bg.occupied[i]) {
            tree.grow(i);
            return;
        }

    }
}

