export function collision (obj1, obj2, distance){

    let rightOfobj1 = obj1.position.x + obj1.spriteWidth;
    let leftOfobj1 = obj1.position.x;

    let rightOfobj2 = obj2.position.x + obj2.spriteWidth;
    let leftOfobj2 = obj2.position.x;

    if (
        leftOfobj2 <= rightOfobj1 + distance &&
        rightOfobj2 >= leftOfobj1 - distance
    ) {
        return true;
    } else {
        return false;
    }
}

export function collisionUpDown(obj1, obj2, distance){
    let bottomOfobj1 = obj1.position.y + obj1.spriteHeight;
    let topOfobj1 = obj1.position.y;


    let bottomOfobj2 = obj2.position.y + obj2.spriteHeight;
    let topOfobj2 = obj2.position.y;

    if (bottomOfobj1 >= topOfobj2 - distance &&
            topOfobj1 <= bottomOfobj2 + distance )
        {
            return true;
        } else {
            return false;
        }
}
