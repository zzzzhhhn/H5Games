/**
 * Created by Zora on 2017/6/10.
 */
var bgObj = function () {
    this.num;
    this.x = [];
    this.y = [];
    this.x2 = [];
    this.y2 = [];
    this.occupied = [];
    this.cbg;
    this.over = [];
    this.wl = [];//围栏
}

bgObj.prototype.init = function () {
    this.num = W*H/10000;
    for (var i=0;i<this.num;i++) {
        if(i==0){
            this.x[i] = 0;
            this.y[i] =0;
        }else {
            this.x[i] = this.x[i-1] + 100;
            this.y[i] = this.y[i-1];
            if((i+1)*100%W==100){
                this.x[i] = 0;
                this.y[i] = this.y[i-1] + 100;
            }
        }
        this.wl[i] = false;
        this.over[i] = '';
        this.x2[i] = this.x[i] + 100;
        this.y2[i] = this.y[i] + 100;
        this.occupied[i] = false;
        if(this.x[i] ==0 || this.x[i] == W-100 || this.y[i]==0||this.y[i]==H-100) {
            this.occupied[i] = true;
            this.wl[i] = true;
        }
        if((this.x[i] == bg.x[89] || this.x[i] == bg.x[90]) && this.y[i]==700) {
            this.wl[i] = false;
        }

    }
    bg.occupied[41] = true;
    bg.over[41] = 'house';

}

bgObj.prototype.draw = function () {
    for(var i=0;i<this.num;i++) {
        ctx1.drawImage(bgPic,this.x[i],this.y[i]);
        if(this.wl[i]) {
            ctx1.drawImage(wl,this.x[i],this.y[i]);
        }
    }


}

