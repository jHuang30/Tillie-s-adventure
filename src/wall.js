import Spider from './spider';
import { collision, collisionUpDown } from './collision';
import { buildLevel } from './level';
class Wall {
    constructor(game, position){
        this.image = document.getElementById('wall');
        this.game = game;
        this.position = position;
        this.spriteWidth = 45;
        this.spriteHeight = 60;
        
    }

    notRepeat (arr, po){
        arr.forEach(ele => {
            if(ele[0] === po[0] && ele[1] === po[1]){
                return false;
            }
        });
        return true;
    }
    update (){
        // this.game.clone.forEach(spider=>{
        //     if (collision(spider, this, -25)) {//if left right touch first
        //         if (collisionUpDown(spider, this, -10)) {//make sure it collide the item, not just left and right of the whole screen.
        //             spider.position.x = spider.oldPosition.x;//spider send back to old position before collision
        //             spider.speedX = - spider.speedX;//spider bounce back x direction
        //         }
        //     } if (collisionUpDown(spider, this, -10)) {//if up and down touch first 
        //         if (collision(spider, this, -25)) {//same idea from line 25
        //             spider.position.y = spider.oldPosition.y;//same idea from line 26
        //             spider.speedY = - spider.speedY;// same idea from line 27
        //         }
        //     }

        // });
        // if (collision(this.game.spider, this, -25)) {//if left right touch first
        //     if (collisionUpDown(this.game.spider, this, -10)) {//make sure it collide the item, not just left and right of the whole screen.
        //         this.game.spider.position.x = this.game.spider.oldPosition.x;//spider send back to old position before collision
        //         this.game.spider.speedX = - this.game.spider.speedX;//spider bounce back x direction
        //     }
        // } if (collisionUpDown(this.game.spider, this, -10)) {//if up and down touch first 
        //     if (collision(this.game.spider, this, -25)) {//same idea from line 25
        //         this.game.spider.position.y = this.game.spider.oldPosition.y;//same idea from line 26
        //         this.game.spider.speedY = - this.game.spider.speedY;// same idea from line 27
        //     }
        // }

        // player collision below
        if (collision(this.game.player, this, -20)){//if left right touch first
            if (collisionUpDown(this.game.player, this, -15)){
                this.game.player.position.x = this.game.player.oldPosition.x;//same idea from line 26 But, it does not need to bounce back.
                }
            }
        if (collisionUpDown(this.game.player, this, -15)){//if up and down touch first   
            if (collision(this.game.player, this, -25)){
                 this.game.player.position.y = this.game.player.oldPosition.y;
             }
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