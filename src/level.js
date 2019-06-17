import Wall from './wall';
import Item from './items';
import Animals from './animal';

export function buildLevel(game, level){
    let imageChicken = document.getElementById('chicken');
    let imagePig = document.getElementById('pig');
    let imageSheep = document.getElementById('sheep');
    let imageLama = document.getElementById('lama');
    let wa = [];

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
            }
        });
    });
    return wa;
}
export const level1 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
];
export const level2 = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 1, 1, 1, 1, 1]
];