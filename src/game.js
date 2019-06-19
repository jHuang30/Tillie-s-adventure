import Tillie from "./tillie";
import Spider from './spider';
import Control from './control';
import { buildLevel, level1, level2,level3 } from './level';

class Game {
    constructor(width, heigth){
        this.gameWidth = width; 
        this.gameHeight = heigth;  
        this.chicken = 0; 
        this.leveled = level1;
        this.levelList =[level1,level2,level3];
        this.counter = 1;
    }


    start(){
        var elem = document.getElementById("outsideBar");
        elem.style.display="block";
        this.player = new Tillie(this);
        var walls = buildLevel(this, this.leveled)[0];
        this.spider = new Spider(this, 600, 500,0.5);
        this.clone =[];
        this.gameObjects = [this.player, this.spider,...walls];
        new Control(this.player);
    }
    display(ctx,level){
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "#ffffff";
        ctx.font = "50px Indie Flower";
        ctx.fillText(level, 300, 250);
    }
    draw(ctx){

        if (this.chicken === buildLevel(this, this.leveled)[1]) {
            this.leveled = this.levelList[this.counter];
            var walls = buildLevel(this, this.leveled)[0];
            this.gameObjects = [this.player, this.spider, ...walls];
            this.chicken = 0;
            this.counter +=1;
            // setInterval(() => {
            //     let xpo = Math.random() * 700;
            //     let ypo = Math.random() * 500;
            //     this.clone.push(new Spider(this, xpo, ypo, Math.random()*1.5));
            //     this.gameObjects = [this.player, this.spider, ...walls, ...this.clone];
            // }, 5000);
        }

        this.gameObjects = this.gameObjects.filter(obj=> !obj.markedForDeletion);
        this.gameObjects.forEach(obj => {
            obj.draw(ctx);
        });
    }
}

export default Game;