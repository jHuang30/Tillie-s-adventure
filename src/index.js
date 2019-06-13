
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var sound = document.getElementById("sound");
    var fps = 50;
    
    document.getElementById("start-btn").addEventListener('click', startGame);
    document.getElementById("stop-btn").addEventListener('click', stopPlay);
    document.getElementById("unmute-btn").addEventListener('click', play);
    document.getElementById("mute-btn").addEventListener('click', stopPlay);
    
    var game = new Game(canvas.width, canvas.height);
    
    
    function play(){
        sound.play();
    }
    
    function stopPlay(){
        sound.pause();
    }
    
    function gameLoop(){
        debugger

        setTimeout(function(){
            ctx.clearRect(
                0, 0, canvas.width, canvas.height
            )
            game.draw(ctx);
            requestAnimationFrame(gameLoop);
        }, fps);
    }   
    
    function startGame(){
        debugger
        const wel = document.getElementById('welcome');
        wel.
        game.start();
        gameLoop();
        play();
    }
})







