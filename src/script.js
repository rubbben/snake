import "@babel/polyfill";
import Game from "./game.js";

window.onload = () => {
    
    let myGame = new Game();
    myGame.init();

    document.onkeydown = (e) => {
        const key = e.keyCode;
        let newDirection;
        switch(key){
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            case 32:
                myGame.launch();
                // myGame2.launch();
                return;
            default:
                return;
        }
        myGame.snakee.setDirection(newDirection);
        // myGame2.snakee.setDirection(newDirection);
    };

    
}

