import Tillie from "./tillie";
import Spider from './spider';
import Control from './control';
import { buildLevel, level1, level2 } from './level';

class Game {
    constructor(width, heigth){
        this.gameWidth = width; 
        this.gameHeight = heigth;  
        this.chicken = 0; 
    }


    start(){
        var elem = document.getElementById("outsideBar");
        elem.style.display="block";
        this.player = new Tillie(this);
        let walls = buildLevel(this, level1);
        if(this.chicken ===2){
            walls = buildLevel(this, level2);
            this.gameObjects = [this.player, this.spider, ...walls];
        }
        this.spider = new Spider(this, 100, 500);
        this.clone =[];
        this.gameObjects = [this.player, this.spider,...walls];
        // setInterval(()=> {        
        //     let xpo = Math.random() * 700;
        //     let ypo = Math.random() * 500;
        //     this.clone.push(new Spider(this, xpo, ypo));
        //     this.gameObjects = [this.player, this.spider, ...walls,...this.clone];
        // }, 5000);
        new Control(this.player);
    }

    draw(ctx){
        if (this.chicken === 2) {
            let walls = buildLevel(this, level2);
            this.gameObjects = [this.player, this.spider, ...walls];
        }
        this.gameObjects = this.gameObjects.filter(obj=> !obj.markedForDeletion);
        this.gameObjects.forEach(obj => {
            obj.draw(ctx);
        });
    }
}

export default Game;