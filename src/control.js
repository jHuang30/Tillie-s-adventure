
class Control{
    constructor(player){
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case 37:
                    player.movingLeft();
                    break;
                case 38:
                    player.movingUp();
                    break;
                case 39:
                    player.movingRight();
                    break;
                case 40:
                    player.movingDown();
                    break;
                default:
                    break;
            }
        });

        document.addEventListener('keyup', e => {
            switch(event.keyCode){
                case 37:
                    if (player.speedX < 0) 
                        return player.stopX();
                        break;
                case 38:
                    if (player.speedY < 0) 
                        return player.stopY();
                        break;
                case 39:
                    if (player.speedX > 0) 
                        return player.stopX();
                        break;
                case 40:
                    if (player.speedY > 0) 
                        return player.stopY();
                        break;
                    
            }
        });
    }
}

export default Control