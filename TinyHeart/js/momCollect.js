/**
 * Created by zoramac on 2017/2/8.
 */
function momcollect() {
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i] && !data.gameOver && fruit.full[i]){
            const l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l < 900){
                fruit.die(i);
                data.fruitNum++;
                mom.bigBodyCount++;
                wave.born(i,fruit.x[i],fruit.y[i]);
                if(mom.bigBodyCount >= 7){
                    mom.bigBodyCount = 7;
                }
                if(fruit.c[i] == "blue"){
                    data.double++;
                    if(data.double >=5){
                        data.double = 5;
                    }
                    mom.c = "blue";
                    mom.bigBodyCount = 0;
                }
            }
        }

    }
}
function feed() {
    const l = calLength2(baby.x,baby.y,mom.x,mom.y);
    if(l < 900 && data.fruitNum > 0 && !data.gameOver){
        baby.babyBodyCount = 0;
        mom.bigBodyCount   = 0;
        mom.c              ="";
        data.score         += data.fruitNum * 10 * data.double;
        data.fruitNum      = 0;
        data.double        = 1;
        for(var i=0;i<feedwave.num;i++){
            feedwave.born(i,baby.x,baby.y);
        }

    }
}