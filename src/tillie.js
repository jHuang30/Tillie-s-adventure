class Tillie {
    constructor(game){
        // debugger
        this.image = document.getElementById('tillie');
        this.position = { x: 10, y: 600 };
        this.srcX = 0;
        this.srcY = 0;
        this.sheetWidth = 576;
        this.sheetHeight = 256;
        this.column = 9;
        this.row = 4;
        this.spriteWidth = this.sheetWidth / this.column;
        this.spriteHeight = this.sheetHeight / this.row;
        this.currentFrame = 0;
        this.game = game;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 6;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.lives = 3;

        //
        // this.invulnerable = false;
    }

    updateFrame() {
        this.position.x += this.speedX;
        this.position.y += this.speedY;
        if (this.position.x < -20) this.position.x = -20;
        if (this.position.x - this.gameWidth > -50)
            this.position.x = this.gameWidth - 50;
        if (this.position.y < -10) this.position.y = -10;
        if (this.position.y - this.gameHeight > -70)
            this.position.y = this.gameHeight -70;

    }

    facingRight() {
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 3 * this.spriteHeight;
    }

    facingLeft() {
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 1 * this.spriteHeight;
    }

    facingDown() {
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 2 * this.spriteHeight;
    }

    facingUp() {
        this.currentFrame = ++this.currentFrame % this.column;
        this.srcX = this.currentFrame * this.spriteWidth;
        this.srcY = 0 * this.spriteHeight;
    }

    draw(ctx){  
        // debugger
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

    movingLeft(){
        this.speedX = -this.maxSpeed;
        this.facingLeft();
    }

    movingRight(){
        this.speedX = this.maxSpeed;
        this.facingRight();
    }

    movingUp(){
        this.speedY = -this.maxSpeed;
        this.facingUp();
    }

    movingDown(){
        this.speedY = this.maxSpeed;
        this.facingDown();
    }

    stopX(){
        this.speedX = 0;
        if(this.speedY > 0){
            this.facingDown();
        }else if(this.speedY < 0) {
            this.facingUp();
        }
    }

    stopY(){
        this.speedY = 0;
        if (this.speedX > 0){
            this.facingRight();
        }else if (this.speedX < 0 ){
            this.facingLeft();
        }
    }

}

export default Tillie;