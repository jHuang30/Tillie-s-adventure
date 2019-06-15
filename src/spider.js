import { collision, collisionUpDown } from './collision';

class Spider{
    constructor(game){
        this.image = document.getElementById('spider');
        this.position = {x: 400, y: 100};
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
    }
    healthlost(player){
        player.lives -=1;
        //
        // player.invulnerable = true;
        // setTimeout(() => player.invulnerable = false, 1000);
    }
    updateFrame(){
        this.position.x += this.speedX;
        this.position.y += this.speedY;
        
        if(this.position.x - this.gameWidth > -90 || this.position.x < -15) {
            this.speedX  = -this.speedX;
        }

        if (this.position.y - this.gameHeight > -90 || this.position.y < -20) {
            this.speedY = -this.speedY;
        }   

        this.currentFrame = ++this.currentFrame % (this.column - 1);
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = this.frame * this.spriteHeight;

        const distance = 50;

        if (collision(this.game.player, this, distance) && 
        collisionUpDown(this.game.player, this, distance)){
            this.frame = this.speedY > 0 ? 4 : 5;
            if (this.position.x > this.game.player.position.x) {
                this.speedX = -this.maxSpeed;
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
        let monster = this;
        if(monster.game.player.lives >0){
            if (collision(monster.game.player, monster, -10 ) && collisionUpDown(this.game.player, monster, distance)) {
            setTimeout(monster.healthlost(monster.game.player),5000);
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
            this.spriteWidth,
            this.spriteHeight
        );
    }
}

export default Spider