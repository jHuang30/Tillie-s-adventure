
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var sound = document.getElementById("sound");
    var fps = 60;
    
    document.getElementById("start-btn").addEventListener('click', startGame);
    document.getElementById("stop-btn").addEventListener('click', stopPlay);
    document.getElementById("unmute-btn").addEventListener('click', play);
    document.getElementById("mute-btn").addEventListener('click', stopPlay);
    
    var game = new Game(canvas.width, canvas.height);
    var stop = true;
    
    function play(){
        sound.play();
        stop = false;
    }
    
   
    
    function gameLoop(){
        setTimeout(function(){
            ctx.clearRect(
                0, 0, canvas.width, canvas.height
            )
            game.draw(ctx);
            var stopId = requestAnimationFrame(gameLoop);
            if(stop||game.player.lives ===0){
                cancelAnimationFrame(stopId);
                var elem = document.getElementById("outsideBar");
                elem.style.display = "none";
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle = "#ffffff";
                ctx.font = "50px Indie Flower";
                ctx.fillText("Game Over", 300, 250);
            }
        }, fps);
    }   
    function stopPlay() {
        if(stop){
            stop = false;
            requestAnimationFrame(gameLoop);
        } else{
            stop = true;
        }
        sound.pause();
        
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







