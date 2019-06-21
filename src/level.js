import Wall from './wall';
import Item from './items';
import Animals from './animal';
import Spider from './spider';
export function buildLevel(game, level){
    let imageChicken = document.getElementById('chicken');
    let imagePig = document.getElementById('pig');
    let imageSheep = document.getElementById('sheep');
    let imageLama = document.getElementById('lama');
    let wa = [];
    var counterChicken = 0;
    level.forEach((row, i) => {
        row.forEach((wal, j) => {
            if (wal === 1) {
                let position = {
                    x: 50+45 * j,
                    y: 60 * i,
                };
                wa.push(new Wall(game, position));
            } else if (wal ===2){
                let position = {
                    x: 50+45*j,
                    y: 60*i
                };
                wa.push(new Item(game,position));
            } else if (wal===3){
                let position = {
                    x: 50 + 45 * j,
                    y: 60 * i
                };
                wa.push(new Animals(game, imageChicken, position,128,128));
                counterChicken +=1;
            } else if(wal ===4){
                let position = {
                    x: 50 + 45 * j,
                    y: 60 * i
                };
                wa.push(new Spider(game,position.x, position.y, 0.5));
            }
        });
    });
    return [wa,counterChicken];
}

export const level1 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]
];
export const level2 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 3, 2, 0, 0, 0, 0, 3, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]
];
export const level3 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 3, 2, 0, 0, 0, 0, 3, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 1, 0, 0, 4, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3, 0, 0, 1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]
];
