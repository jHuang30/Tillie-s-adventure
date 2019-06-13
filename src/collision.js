export function collision (tillie, spider, distance){

    let bottomOfSpider = spider.position.y + spider.spriteHeight;
    let topOfSpider = spider.position.y;
    let rightOfSpider = spider.position.x + spider.spriteHeight;
    let leftOfSpider = spider.position.x;

    let bottomOfTillie = tillie.position.y + tillie.spriteHeight;
    let topOfTillie = tillie.position.y;
    let rightOfTillie = tillie.position.x + tillie.spriteWidth;
    let leftOfTillie = tillie.position.x

    if (
        bottomOfSpider >= topOfTillie - distance &&
        topOfSpider <= bottomOfTillie + distance &&
        leftOfSpider <= rightOfTillie + distance &&
        rightOfSpider >= leftOfTillie - distance
    ) {
        return true;
    } else {
        return false;
    }
}
