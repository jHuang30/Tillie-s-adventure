import Tillie from "./tillie";
import Spider from './spider';
import Control from './control'
import { buildLevel, level1 } from './level'

class Game {
    constructor(width, heigth){
        this.gameWidth = width; 
        this.gameHeight = heigth;   
        this.lives = 3;
        this.heartImage = document.getElementById('heart');
        this.lives = 3;
        this.potionImage = document.getElementById('potion');
        this.potionPosition = {
            x: Math.floor(Math.random() * 751),
            y: Math.floor(Math.random() * 551)
        }
    }


    start(){
        this.player = new Tillie(this);
        this.spider = new Spider(this);
        let walls = buildLevel(this, level1);

        debugger
        this.gameObjects = [...walls, this.player, this.spider];

        new Control(this.player);
        
    }

    drawLives(ctx){
        ctx.drawImage(
            this.heartImage,
            650,
            10,
            40,
            40,
        )   

        ctx.fillStyle = "#FFF";
        ctx.font = "40px Indie Flower";
        ctx.fillText(this.lives, 700, 40);
        
    }

    drawPotion(ctx){
        ctx.drawImage(
            this.potionImage,
            this.potionPosition.x,
            this.potionPosition.y,
            40,
            40
        )
    }

    draw(ctx){
        this.gameObjects.forEach(obj => {
            obj.draw(ctx);
        });

        this.drawLives(ctx);
        this.drawPotion(ctx);
    }
}

export default Game;