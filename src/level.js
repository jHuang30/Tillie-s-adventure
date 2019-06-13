import Wall from './wall';

export const level1= [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

export function buildLevel(game, level){
    let wa = [];

    level.forEach((row, i) => {
        row.forEach((wal, j) => {
            if (wal === 1) {
                let position = {
                    x: 93 * i,
                    y: 122 * j,
                }
                wa.push(new Wall(game, position));
            }
        });
    });
    return wa
}