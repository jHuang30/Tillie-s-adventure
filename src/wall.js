class Wall {
    constructor(game, position){
        debugger
        this.image = document.getElementById('wall');
        this.game = game;
        this.position = position;
        this.spritWidth = 93;
        this.spritHeight = 122;

    }

    draw(ctx){
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            60,
            60,
        );
    }
}

export default Wall;