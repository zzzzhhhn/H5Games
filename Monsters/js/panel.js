/**
 * Created by Zora on 2017/6/10.
 */
var panelObj = function () {
    this.x;
    this.y;
    this.show;
}

panelObj.prototype.init = function () {
    this.x = cx;
    this.y = cy;
    this.show = false;
    this.cbg = 0;
}

panelObj.prototype.draw = function () {
    if(this.show && !bg.occupied[bg.cbg]) {
        ctx2.save();
        ctx2.fillStyle = "rgba(60,255,60,0.5)";
        ctx2.beginPath();
        ctx2.fillRect(this.x, this.y, 100, 100);
        ctx2.closePath();
        ctx2.stroke();
        ctx2.drawImage(fishLogo,this.x,this.y-100);
        ctx2.drawImage(moguLogo,this.x,this.y+100);
        ctx2.drawImage(slmLogo,this.x-100,this.y);
        ctx2.drawImage(dragonLogo,this.x+100,this.y);
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.font = "20px Verdana";
        ctx2.fillText('取消',this.x+50,this.y+60);
        ctx2.restore();
    }
    if(this.show && bg.occupied[bg.cbg]){
        ctx2.save();
        ctx2.fillStyle = "rgba(255,0,0,0.5)";
        ctx2.fillRect(this.x, this.y, 100, 100);
        ctx2.restore();
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.font = "20px Verdana";
        ctx2.fillText('取消',this.x+50,this.y+60);
        ctx2.restore();
    }

    if(this.show && bg.occupied[bg.cbg] && bg.over[bg.cbg]=='house') {
        ctx2.save();
        ctx2.fillStyle = "rgba(60,255,60,0.5)";
        ctx2.strokeStyle = "white";
        ctx2.beginPath();
        ctx2.fillRect(this.x, this.y, 100, 100);
        ctx2.strokeRect(this.x, this.y, 100, 100);
        ctx2.fillRect(this.x,this.y-100,100,100);
        ctx2.closePath();
        ctx2.stroke();
        ctx2.restore();
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.textAlign = "center";
        ctx2.font = "20px Verdana";
        ctx2.fillText('升级',this.x+50,this.y-40);
        ctx2.restore();
        if(house.grassCost > data.grassCount || house.sjCost > data.sjCount) {
            ctx2.save();
            ctx2.fillStyle = "rgba(100,100,100,0.8)";
            ctx2.fillRect(this.x, this.y-100, 100, 100);
            ctx2.restore();
            ctx2.save();
            ctx2.fillStyle = "white";
            ctx2.font = "20px Verdana";
            ctx2.fillText('纤维：'+house.grassCost,this.x,this.y-70);
            ctx2.fillText('水晶：'+house.sjCost,this.x,this.y-20);
            ctx2.restore();
        }
    }
    if((fish.grassCost > data.grassCount || fish.sjCost > data.sjCount || data.limit >= house.limit) && this.show && !bg.occupied[bg.cbg]) {
        ctx2.save();
        ctx2.fillStyle = "rgba(100,100,100,0.8)";
        ctx2.fillRect(this.x,this.y-100,100,100);
        ctx2.restore();
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.font = "20px Verdana";
        ctx2.fillText('纤维：'+fish.grassCost,this.x,this.y-70);
        ctx2.fillText('水晶：'+fish.sjCost,this.x,this.y-40);
        ctx2.restore();
    }
    if((mogu.grassCost > data.grassCount || mogu.sjCost > data.sjCount || data.limit >= house.limit) && this.show && !bg.occupied[bg.cbg]) {
        ctx2.save();
        ctx2.fillStyle = "rgba(100,100,100,0.8)";
        ctx2.fillRect(this.x,this.y+100,100,100);
        ctx2.restore();
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.font = "20px Verdana";
        ctx2.fillText('纤维：'+mogu.grassCost,this.x,this.y+140);
        ctx2.fillText('水晶：'+mogu.sjCost,this.x,this.y+170);
        ctx2.restore();
    }
    if((slm.grassCost > data.grassCount || data.limit >= house.limit) && this.show && !bg.occupied[bg.cbg]) {
        ctx2.save();
        ctx2.fillStyle = "rgba(100,100,100,0.8)";
        ctx2.fillRect(this.x-100,this.y,100,100);
        ctx2.restore();
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.font = "20px Verdana";
        ctx2.fillText('纤维：'+slm.grassCost,this.x-100,this.y+40);
        ctx2.restore();
    }
    if((dragon.grassCost > data.grassCount || dragon.sjCost > data.sjCount || data.limit >= house.limit) && this.show && !bg.occupied[bg.cbg]) {
        ctx2.save();
        ctx2.fillStyle = "rgba(100,100,100,0.8)";
        ctx2.fillRect(this.x+100,this.y,100,100);
        ctx2.restore();
        ctx2.save();
        ctx2.fillStyle = "white";
        ctx2.font = "20px Verdana";
        ctx2.fillText('纤维：'+dragon.grassCost,this.x+100,this.y+40);
        ctx2.fillText('水晶：'+dragon.sjCost,this.x+100,this.y+70);
        ctx2.restore();
    }

}