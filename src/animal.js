import { collision, collisionUpDown } from './collision';
export default class Animals{
    constructor(game,image,position,sheetWidth,sheetHeight){
        this.image=image;
        this.position = position;
        this.oldPosition = { x: this.position.x, y: this.position.y };
        this.srcX = 0;
        this.srcy = 0;
        this.sheetWidth = sheetWidth;
        this.sheetHeight = sheetHeight;
        this.column = 4;
        this.row = 4;
        this.spriteWidth = this.sheetWidth / this.column;
        this.spriteHeight = this.sheetHeight / this.row;
        this.currentFrame = 0;
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.maxSpeed = 5;
        this.speedX = this.maxSpeed;
        this.speedY = this.maxSpeed;
        this.follow = false;
        this.added = false;
    }
    update(){
        this.faceRight();   
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        if (collision(this, this.game.player, -15) && collisionUpDown(this, this.game.player, -15)) {
            this.follow = true;
            if(!this.added) {
                this.game.chicken +=1;
                this.added = true;
            }
        }
        
        if(this.follow){
            if (!collision(this, this.game.player, 105) && collisionUpDown(this, this.game.player, 105)) {
                this.follow = false;
                if(this.added){this.game.chicken -= 1; this.added = false;}
            } else if (collision(this, this.game.player, 25) && collisionUpDown(this, this.game.player, 25)){
                this.position.x = this.oldPosition.x;
                this.position.y = this.oldPosition.y;
            }
            this.position.x += this.speedX;
            this.position.y += this.speedY;
            this.game.player.path.forEach(pos=>{if (this.position.x > pos[0]+10) {
                this.speedX = -this.maxSpeed;
            } else if (this.position.x < pos[0] + 10){
                this.speedX = this.maxSpeed;
            } else {this.speedX = 0;}
                if (this.position.y > pos[1]+10) {
                this.speedY = -this.maxSpeed;
                } else if (this.position.y < pos[1] + 10){
                this.speedY = this.maxSpeed;
            } else {this.speedY = 0;}
            });
        if (this.speedX >= 0) this.faceRight();
        else { this.faceLeft();}
        if (this.speedY >= 0) this.faceDown();
        else {this.faceUp();}
        }
    }  
    faceRight(){
            this.currentFrame = ++this.currentFrame % this.column;
            this.srcX = this.currentFrame * this.spriteWidth;
            this.srcY = 3 * this.spriteHeight;
        }
    faceLeft(){
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 1 * this.spriteHeight;
    }
    faceDown(){
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 2 * this.spriteHeight;
    }
    faceUp(){
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 0 * this.spriteHeight;
    }
    draw(ctx){
        this.update();
        ctx.drawImage(
            this.image,
            this.srcX,
            this.srcY,
            this.spriteWidth,
            this.spriteHeight,
            this.position.x,
            this.position.y,
            this.spriteWidth,
            this.spriteHeight
            );
        }
}   