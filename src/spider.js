import { collision, collisionUpDown } from './collision';
import Wall from './wall';
class Spider{
    constructor(game, positionX,positionY,scale){
        this.image = document.getElementById('spider')
        this.position = {x: positionX, y: positionY};
        this.oldPosition = { x: positionX, y: positionY };
        this.scale = scale;
        this.srcX = 0;
        this.srcy = 0;
        this.sheetWidth = 687;
        this.sheetHeight = 692;
        this.column = 7;
        this.row = 7;
        this.spriteWidth = this.sheetWidth / this.column;
        this.spriteHeight = this.sheetHeight / this.row;
        this.currentFrame = 0;
        this.game = game;
        this.maxSpeed = 3;
        this.speedX = this.maxSpeed;
        this.speedY = this.maxSpeed;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.frame = 2;
        this.counter = 0;
    }
    healthlost(player){
        player.lives -=1;
    }
    updateFrame(){
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        this.position.x += this.speedX;
        this.position.y += this.speedY;
        var instancesOfWall = this.game.gameObjects.filter(obj=> obj instanceof Wall);// filtered all wall objects have been created in game class. 
         instancesOfWall.forEach(wall => {//go through this wall lists and make sure this(spider) don't touch wall.
            if (collision(wall, this, -25)) {//if left right touch first
                if (collisionUpDown(wall, this, -10)) {//make sure it collide the item, not just left and right of the whole screen.
                    this.position.x = this.oldPosition.x;//spider send back to old position before collision
                    this.speedX = - this.speedX;//spider bounce back x direction
                }
            } if (collisionUpDown(wall, this, -10)) {//if up and down touch first 
                if (collision(wall, this, -25)) {//same idea from line 25
                    this.position.y = this.oldPosition.y;//same idea from line 26
                    this.speedY = - this.speedY;// same idea from line 27
                }
            }

        });
        if(this.position.x - this.gameWidth > -90 || this.position.x < -15) {
            this.speedX  = -this.speedX;
        }//bounce back when touching edges

        if (this.position.y - this.gameHeight > -90 || this.position.y < -20) {
            this.speedY = -this.speedY;
        }   //bounce back when touching edges

        this.currentFrame = ++this.currentFrame % (this.column - 1);
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = this.frame * this.spriteHeight;

        const distance = 50*this.scale;

        if (collision(this.game.player, this, distance) && 
        collisionUpDown(this.game.player, this, distance)){
            this.frame = this.speedY > 0 ? 4 : 5;
            if (this.position.x > this.game.player.position.x) {
                this.speedX = -this.maxSpeed;// following the player
            } else {
                this.speedX = this.maxSpeed;
            }
            if (this.position.y > this.game.player.position.y) {
                this.speedY = -this.maxSpeed;
            } else {
                this.speedY = this.maxSpeed;
            }
        } else {
            this.frame = this.speedY > 0 ? 2 : 3;
        }
        if(this.game.player.lives >0){
            if (collision(this.game.player, this, -20 ) && collisionUpDown(this.game.player, this, -(distance/2))) {    
                    this.game.player.lives -=1;
        }}
    }

    draw(ctx) {
        this.updateFrame();
        ctx.drawImage(
            this.image,
            this.srcX,
            this.srcY,
            this.spriteWidth,
            this.spriteHeight,
            this.position.x,
            this.position.y,
            this.spriteWidth*this.scale,
            this.spriteHeight*this.scale
        );
    }
}

export default Spider