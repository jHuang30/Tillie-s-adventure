
import Game from './game';
import { buildLevel} from './level';

document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var sound = document.getElementById("sound");
    var fps = 60;

    const startPause = document.getElementById("stop-btn");
    const replayButton = document.getElementById("start-btn");
    
   // document.getElementById('start-btn').addEventListener('click', removeClassHidden)
    document.getElementById('startGame').addEventListener('click', startGame);
    startPause.addEventListener('click', stopPlay);
    replayButton.addEventListener('click', stopPlay);
    document.getElementById("unmute-btn").addEventListener('click', play);
    document.getElementById("mute-btn").addEventListener('click', mute);
    
    var game = new Game(canvas.width, canvas.height);
    var stop = true;        

    function play(){
        sound.play();
        stop = false;
    }
    function mute(){
        sound.pause();
    }
   
    
    function gameLoop(){
        setTimeout(function(){
            ctx.clearRect(
                0, 0, canvas.width, canvas.height
            )
            game.draw(ctx);
            var stopId = requestAnimationFrame(gameLoop);
                if (stop){
                    cancelAnimationFrame(stopId);
                }
                
            if(game.player.lives ===0){
                var elem = document.getElementById("outsideBar");
                elem.style.display = "none";
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle = "#ffffff";
                ctx.font = "50px Indie Flower";
                ctx.fillText("Game Over", 300, 250);
                stop = true;
            }
            if (game.chicken === buildLevel(game,game.leveled)[1]) {
                fps = 2000;
                game.display(ctx, "Level "+ String(game.counter+1));
                setTimeout(() => {
                    fps=60;}, 2000);
                // stopPlay();
                // display();
            }
        }, fps);
    }   

    function stopPlay() {   
        toggleClass();
        if(stop){
            stop = false;
            requestAnimationFrame(gameLoop);
            
        } else{
            stop = true;
        }
        
    }

    function toggleClass(){
        startPause.classList.toggle('hidden');
       }


    function startGame(){
        const wel = document.getElementsByClassName('welcome');
        wel[0].classList.add("hidden");
            stop=false;
            game.start();
            requestAnimationFrame(gameLoop);
        play();

    }
})







