import { collision, collisionUpDown } from "./collision";
export default class Item {
  constructor(game, position) {
    this.potionImage = document.getElementById("potion");
    this.game = game;
    this.position = position;
    this.spriteWidth = 40;
    this.spriteHeight = 40;
    this.markedForDeletion = false;
  }
  update() {
    if (
      collision(this, this.game.player, -5) &&
      collisionUpDown(this, this.game.player, -5)
    ) {
      console.log("touched");
      this.markedForDeletion = true;
      if (this.game.player.lives <= 90) {
        this.game.player.lives += 10;
      } else {
        this.game.player.lives = 100;
      }
    }
  }
  draw(ctx) {
    this.update();
    ctx.drawImage(
      this.potionImage,
      this.position.x,
      this.position.y,
      this.spriteWidth,
      this.spriteHeight
    );
  }
}
