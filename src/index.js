
import Game from './game';
import { buildLevel,level3} from './level';
export var stop = true;
document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var sound = document.getElementById("sound");
    var fps = 20;

    const startPause = document.getElementById("stop-btn");
    const replayButton = document.getElementById("start-btn");
    
   // document.getElementById('start-btn').addEventListener('click', removeClassHidden)
    document.getElementById('startGame').addEventListener('click', startGame);
    startPause.addEventListener('click', stopPlay);
    replayButton.addEventListener('click', stopPlay);
    document.getElementById("unmute-btn").addEventListener('click', play);
    document.getElementById("mute-btn").addEventListener('click', mute);
    const replay = document.getElementById("replay");
    replay.addEventListener('click',startGame);
    replay.classList.toggle("hidden");
    
    var game = new Game(canvas.width, canvas.height);
        

    function play(){
        sound.play();
        stop = false;
    }
    function mute(){
        sound.pause();
    }
   
    
    function gameLoop(){
        window.addEventListener("keydown", function (e) {
            // space and arrow keys
            if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);
        setTimeout(function(){
            if (!stop){ctx.clearRect(
                0, 0, canvas.width, canvas.height
            );
                game.draw(ctx);
            }
            
            var stopId = requestAnimationFrame(gameLoop);
                if (stop){
                    cancelAnimationFrame(stopId);
                }
            
            if(game.player.lives ===0){
                var elem = document.getElementById("outsideBar");
                elem.style.display = "none";
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#ffffff";
                ctx.font = "50px Indie Flower";
                ctx.fillText("Game Over", 300, 250);
                var seconds = 5;
                var countDown = setInterval(() => { // restart count down
                    elem.style.display = "none";
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillText("Game Over", 300, 250);
                    ctx.fillText(seconds, 300, 300);
                    seconds -=1;
                    if (seconds < 0) {
                        clearInterval(countDown);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.fillText("Start Again!", 300, 300);
                        if (replay.classList.contains('hidden')) {
                            replay.classList.remove('hidden');
                            replay.classList.toggle('show');
                        }
                    }
                },1000);
                stop = true;
            }
            if (game.chicken === buildLevel(game,game.leveled)[1]) {
                if (game.leveled === game.levelList[2]){
                    fps=2000;
                    mute();
                    var elem = document.getElementById("outsideBar");
                    elem.style.display = "none";
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "50px Indie Flower";
                    ctx.fillText("you Win!", 300, 250);
                    ctx.fillText("play again?", 300, 300);
                    stop = true;
                    if (replay.classList.contains('hidden')) {
                        replay.classList.remove('hidden');
                        replay.classList.toggle('show');
                    }
                }else{
                    fps = 2000;
                game.display(ctx, "Level "+ String(game.counter+1));
                setTimeout(() => {
                    fps=20;}, 2000);} 
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
        debugger
        fps = 20;
        const wel = document.getElementsByClassName('welcome');
        const but = document.getElementById("buttons");
        but.classList.toggle("hidden");
        wel[0].classList.add("hidden");
        if (replay.classList.contains('show')) {
            replay.classList.remove('show'); 
            replay.classList.toggle('hidden');
        }   
            game.start();
            requestAnimationFrame(gameLoop);
            stop = false;
        play();

    }
})







