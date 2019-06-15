
import { collision, collisionUpDown } from './collision';

class Wall {
    constructor(game, position){
        this.image = document.getElementById('wall');
        this.game = game;
        this.position = position;
        this.spriteWidth = 93;
        this.spriteHeight = 122;
        this.playerposition = [];   
        this.spiderposition =[];
        this.distance=0;
        this.update= this.update.bind(this);
    }
    update (){
        var spiderX = this.game.spider.position.x;
        var spiderY = this.game.spider.position.y;
        if (collision(this.game.spider, this, -5) && collisionUpDown(this.game.spider, this, -5)) {
            if (!this.spiderposition.includes([spiderX, spiderY])) {
                this.spiderposition.push([spiderX, spiderY]);
            }
            if (collisionUpDown(this.game.spider, this, -15)) {

                //this.game.spider.position.x = this.spiderposition[0][0];
                this.game.spider.position.y = this.spiderposition[0][1];
                this.game.spider.speedX = - this.game.spider.speedX;
                //this.game.spider.speedX = - this.game.spider.speedX;
            }else{
            this.game.spider.position.x = this.spiderposition[0][0];
            //this.game.spider.position.y = this.spiderposition[0][1];
            //this.game.spider.speedY = - this.game.spider.speedY;
            this.game.spider.speedY = - this.game.spider.speedY;
        }
        } else{this.spiderposition=[];}
        var playerX = this.game.player.position.x;
        var playerY = this.game.player.position.y;
        if (collision(this.game.player, this, this.distance) &&
         collisionUpDown(this.game.player, this, this.distance)){
           if(!this.playerposition.includes([playerX, playerY])){
               this.playerposition.push([playerX, playerY]);
                 }
            if (collisionUpDown(this.game.player, this, this.distance)) {
                this.game.player.position.y = this.playerposition[0][1];}
            else if (collision(this.game.player, this, this.distance))
            {
                 this.game.player.position.x = this.playerposition[0][0];
             }
        } else
        {
             this.playerposition=[];
        }
    }
    draw(ctx){
        this.update();
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.spriteWidth,
            this.spriteHeight
        );
    }
}

export default Wall;