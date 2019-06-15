import Wall from './wall';

export function buildLevel(game, level){
    let wa = [];

    level.forEach((row, i) => {
        row.forEach((wal, j) => {
            if (wal === 1) {
                let position = {
                    x: 50+93 * j,
                    y: 122 * i,
                };
                wa.push(new Wall(game, position));
            }
        });
    });
    return wa;
}
export const level1 = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];