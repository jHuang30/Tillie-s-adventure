
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var sound = document.getElementById("sound");
    var fps = 60;

    const startPause = document.getElementById("stop-btn");
    
    document.getElementById('start-btn').addEventListener('click', removeClassHidden)
    document.getElementById('startGame').addEventListener('click', startGame);
    startPause.addEventListener('click', stopPlay);
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
            if ((!game.leveled) && game.chicken === 2) {
                //fps = 2000;
                setTimeout(game.display(ctx, "level2"), 2000);
                game.leveled = true;
            }
        }, fps);
    }   

    function stopPlay() {   
        debugger
        toggleClass();
        debugger
        if(stop){
            stop = false;
            requestAnimationFrame(gameLoop);
            
        } else{
            stop = true;
        }
        
        // startPause.classList.add('hidden');
    }

    function toggleClass(){
        debugger
        if (!(startPause.classList.contains('hidden'))){
            startPause.classList.add('hidden')
        }
    }

    function removeClassHidden(){
        startPause.classList.remove('hidden');
        stopPlay();
    }

    function startGame(){
        const wel = document.getElementsByClassName('welcome');
        wel[0].classList.add("hidden")
        if(stop){
            stop=false;
            game.start();
            requestAnimationFrame(gameLoop);
        play();}

    }
})







