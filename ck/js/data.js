/**
 * Created by Zora on 2017/2/12.
//  */
// function boss() {
//     data.djs-=deltaTime;
//     if(data.djs<=0) {
//         boss1show();
//         boss2show();
//         data.djs =120000;
//         return;
//     }
// }
function hit() {
    // for(var i=0;i<boss1.num;i++){
    //     for (var j=0;j<seed.num;j++) {
    //         var l3 = calLength2(boss1.x[i]+boss1lPic[0].width*0.5,boss1.y[i]+boss1lPic[0].height*0.5,seed.x[j],seed.y[j]);
    //
    //             if(l3<5000  && boss1.alive[i] && seed.alive[j]) {
    //                 seed.alive[j] = false;
    //                 boss1.blood[i] -= seed.dps;
    //                 if (boss1.blood[i] <= 0) {
    //                     boss1.blood[i]=0;
    //                     boss1.alive[i] = false;
    //                     if (!data.gameover) {
    //                         data.score += 100;
    //                         ypr.alive[j] = true;
    //                         ypr.x[j] = boss1.x[i];
    //                         ypr.y[j] = boss1.y[i];
    //                         zb.alive[j] = true;
    //                         zb.x[j] = boss1.x[i];
    //                         zb.y[j] = boss1.y[i];
    //                         xz.alive[j] = true;
    //                         xz.x[j] = boss1.x[i];
    //                         xz.y[j] = boss1.y[i];
    //                     }
    //                 }
    //             }
    //     }
    // }
    // // for(var i=0;i<boss2.num;i++){
    // //     for (var j=0;j<seed.num;j++) {
    // //         var l4 = calLength2(boss2.x[i]+boss2lPic[0].width*0.5,boss2.y[i]+boss2lPic[0].height*0.5,seed.x[j],seed.y[j]);
    // //
    // //         if(l4<5000  && boss2.alive[i] && seed.alive[j]) {
    // //             seed.alive[j] = false;
    // //             boss2.blood[i] -= seed.dps;
    // //             if (boss2.blood[i] <= 0) {
    // //                 boss2.blood[i]=0;
    // //                 boss2.alive[i] = false;
    // //                 if (!data.gameover) {
    // //                     data.score += 200;
    // //                     fz.alive[j] = true;
    // //                     fz.x[j] = boss2.x[i];
    // //                     fz.y[j] = boss2.y[i];
    // //                     sz.alive[j] = true;
    // //                     sz.x[j] = boss2.x[i];
    // //                     sz.y[j] = boss2.y[i];
    // //                     ypy.alive[j] = true;
    // //                     ypy.x[j] = boss2.x[i];
    // //                     ypy.y[j] = boss2.y[i];
    // //                 }
    // //             }
    // //         }
    // //     }
    // // }
var count = 0;
    // for(var i=0;i<js.num;i++){
    //     // for (var j=0;j<seed.num;j++){
    //     //     var l1 = calLength2(js.x[i]+jsPic[0].width*0.5,js.y[i]+jsPic[0].height*0.25,seed.x[j],seed.y[j]);
    //     //     var l2 = calLength2(js.x[i]+jsPic[0].width*0.5,js.y[i]+jsPic[0].height*0.75,seed.x[j],seed.y[j]);
    //     //     if((l1<900 || l2<900) && seed.alive[j] && js.alive[i]){
    //     //         seed.alive[j] = false;
    //     //         js.blood[i] -=seed.dps;
    //     //         if(js.blood[i]<=0){
    //     //            js.alive[i]     = false;
    //     //            js.limit--;
    //     //            if( !data.gameover){
    //     //                 data.score += 10;
    //     //            }
    //     //            const row1 = Math.random();
    //     //            const row2 = Math.random();
    //     //            const row3 = Math.random();
    //     //            const row4 = Math.random();
    //     //            const row5 = Math.random();
    //     //             const row6 = Math.random();
    //     //            if(row1 >=0.90){
    //     //                ypr.alive[i] = true;
    //     //                ypr.x[i] = js.x[i];
    //     //                ypr.y[i] = js.y[i];
    //     //            }else if(row2 >=0.90){
    //     //                 xz.alive[i] = true;
    //     //                 xz.x[i] = js.x[i];
    //     //                 xz.y[i] = js.y[i];
    //     //             }else if(row3 >=0.90){
    //     //                 fz.alive[i] = true;
    //     //                 fz.x[i] = js.x[i];
    //     //                 fz.y[i] = js.y[i];
    //     //             }else if(row4 >=0.90){
    //     //                 sz.alive[i] = true;
    //     //                 sz.x[i] = js.x[i];
    //     //                 sz.y[i] = js.y[i];
    //     //             }else if(row5 >=0.90){
    //     //                zb.alive[i] = true;
    //     //                 zb.x[i] = js.x[i];
    //     //                zb.y[i] = js.y[i];
    //     //             } else if(row6 >=0.90){
    //     //                ypy.alive[i] = true;
    //     //                ypy.x[i] = js.x[i];
    //     //                ypy.y[i] = js.y[i];
    //     //            }
    //     //         }
    //     //     }
    //     // }
    //     if(js.alive[i]&&ck.hit) {
    //         var l1 = calLength2(js.x[i]+jsPicl[0].width*0.5,js.y[i]+jsPicl[0].height*0.5,ck.x+hitPicl[0].width*0.5,ck.y+hitPicl[0].height*0.5);
    //         if(l1<3000) {
    //
    //             if (js.x[i] < ck.x && ck.dir == 'left') {
    //                 js.blood[i] -= ck.dps;
    //                 return;
    //             }
    //             if (js.x[i] > ck.x && ck.dir != 'left') {
    //                 js.blood[i] -= ck.dps;
    //                 return;
    //             }
    //         }
    //     }
    // }
    //
}
// function arm() {
//     for(var i=0;i<ypr.num;i++){
//         var lypr1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.25,ypr.x[i],ypr.y[i]);
//         var lypr2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.75,ypr.x[i],ypr.y[i]);
//         var lzb1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.25,zb.x[i],zb.y[i]);
//         var lzb2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.75,zb.x[i],zb.y[i]);
//         var lfz1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.25,fz.x[i],fz.y[i]);
//         var lfz2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.75,fz.x[i],fz.y[i]);
//         var lxz1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.25,xz.x[i],xz.y[i]);
//         var lxz2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.75,xz.x[i],xz.y[i]);
//         var lsz1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.25,sz.x[i],sz.y[i]);
//         var lsz2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.75,sz.x[i],sz.y[i]);
//         var lypy1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.25,ypy.x[i],ypy.y[i]);
//         var lypy2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.75,ypy.x[i],ypy.y[i]);
//         if((lypr1<900 || lypr2<900) && ypr.alive[i]){
//             ypr.alive[i] = false;
//             data.life+=10;
//             if(data.life>=data.lifeLimit){
//                 data.life = data.lifeLimit;
//             }
//         }
//             if((lypb1<900 || lypb2<900) && ypb.alive[i]){
//             ypb.alive[i] = false;
//             data.magic+=10;
//             if(data.magic>=data.magicLimit){
//                 data.magic = data.magicLimit;
//             }
//         }
//         if((lzb1<900 || lzb2<900) && zb.alive[i]){
//             zb.alive[i] = false;
//             data.lifeLimit+=10;
//         }
//         if((lfz1<900 || lfz2<900) && fz.alive[i]){
//             fz.alive[i] = false;
//             seed.dps+=5;
//             seed.dpsup =true;
//         }
//         if((lxz1<900 || lxz2<900) && xz.alive[i]){
//             xz.alive[i] = false;
//             sr.sp++;
//         }
//         if((lsz1<900 || lsz2<900) && sz.alive[i]){
//             sz.alive[i] = false;
//             seed.sp1+=0.01;
//             seed.sp2+=0.1;
//             seed.s++;
//         }
//         if((lypy1<900 || lypy2<900) && ypy.alive[i]){
//             ypy.alive[i] = false;
//             sr.wd = true;
//             sr.wdtime = 5000;
//         }
//     }
// }
function hurt() {
    for (var i=0;i<js.num;i++){
        var l1 = calLength2(ck.x+ckPicl[0].width*0.5,ck.y+ckPicl[0].height*0.5,js.x[i]+jsPicl[0].width*0.5,js.y[i]+jsPicl[0].height*0.5);
        if(l1<1500 && js.alive[i] && !ck.wd){
            data.life--;
            if(data.life<=0){
                data.life=0;
                data.gameover=true;
                ck.ck = mbPic;
            }
        }
    }
    // for (var i=0;i<seed1.num;i++){
    //     var l1 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.5,seed1.x[i],seed1.y[i]);
    //     if(l1<5000 && boss2.alive[i] && !sr.wd){
    //         data.life--;
    //         if(data.life<=0){
    //             data.life=0;
    //             data.gameover=true;
    //         }
    //     }
    // }
    // for(var i=0;i<boss1.num;i++) {
    //     var l2 = calLength2(sr.x+srPicl[0].width*0.5,sr.y+srPicl[0].height*0.5,boss1.x[i]+boss1lPic[0].width*0.5,boss1.y[i]+boss1lPic[0].height*0.5);
    //     if (l2 < 5000 && boss1.alive[i] && !sr.wd) {
    //         data.life--;
    //         if (data.life <= 0) {
    //             data.life = 0;
    //             data.gameover = true;
    //         }
    //     }
    // }
}

var dataObj = function () {
    this.gameover = false;
    this.score    = 0;
    this.life     = 100;
    this.magic    = 100;
    this.lifeLimit=100;
    this.magicLimit = 100;
    this.al       = 0;
    this.protect  = false;
    this.djs      = 120000;
}
dataObj.prototype.draw = function () {
    ctx2.save();
    ctx2.strokeStyle = "white";
    ctx2.lineWidth = 30;
    ctx2.globalAlpha = 0.1;
    ctx2.lineCap = "round";
    ctx2.beginPath();
    ctx2.moveTo(W-200,35);
    ctx2.lineTo(W-30,35);
    ctx2.closePath();
    ctx2.stroke();
    ctx2.restore();

    ctx2.save();
    ctx2.strokeStyle = "red";
    ctx2.globalAlpha = 0.7;
    ctx2.lineWidth = 30;
    ctx2.lineCap = "round";
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.beginPath();
    ctx2.moveTo(W-200,35);
    ctx2.lineTo(W-200+170*data.life/data.lifeLimit,35);
    ctx2.closePath();
    ctx2.stroke();
    ctx2.fillText(Math.floor(data.life)+"/"+data.lifeLimit,W-150,40);
    ctx2.restore();

    ctx2.save();
    ctx2.strokeStyle = "blue";
    ctx2.globalAlpha = 0.7;
    ctx2.lineWidth = 30;
    ctx2.lineCap = "round";
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.beginPath();
    ctx2.moveTo(W-200,85);
    ctx2.lineTo(W-200+170*data.magic/data.magicLimit,85);
    ctx2.closePath();
    ctx2.stroke();
    ctx2.fillText(Math.floor(data.magic)+"/"+data.magicLimit,W-150,90);
    ctx2.restore();

    ctx2.save();
    ctx2.shadowBlur = 10;
    ctx2.shadowColor = "white";
    ctx2.font = "20px Verdana";
    ctx2.fillStyle = "white";
    ctx2.textAlign = "center";
    ctx2.fillText("生命值:",W-250,40);
    ctx2.fillText("魔法值:",W-250,90);
    ctx2.fillText("得分："+ data.score,W-400,40);ctx2.fillText(ck.currentY,W-500,40);ctx2.fillText(fire.cd,W-600,40);
    //ctx2.fillText("僵尸数："+ Math.ceil(js.limit)+"/50",100,40);
    ctx2.fillText("Boss倒计时："+ Math.ceil(data.djs/1000),300,40);
    ctx2.fillText(" © 左拉Zora 2017.2.14",W-150,H-30);
    ctx2.restore();
    ctx2.save();
    ctx2.shadowBlur = 20;
    ctx2.shadowColor = randomColor() + "1)";
    ctx2.font = "30px Verdana";
    ctx2.fillStyle = randomColor() + "1)";
    ctx2.textAlign = "center";
    ctx2.fillText("兽人大战僵尸",600,40);
    ctx2.restore();
    if(this.gameover){
        this.al +=deltaTime*0.0005;
        if(this.al >= 1){
            this.al=1;
        }
        ctx2.save();
        ctx2.shadowBlur = 10;
        ctx2.shadowColor = "white";
        ctx2.font = "50px Verdana";
        ctx2.fillStyle ="rgba(255,255,255,"+this.al+")";
        ctx2.textAlign = "center";
        ctx2.fillText("GameOver",W*0.5,H*0.5);
        ctx2.restore();
    }

}