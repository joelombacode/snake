//les constants
const GAME_SIZE= 600;
const SQUARE_SIZE= 20;

const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
let currentDirection="right"
let precedentDirection="right"
function deteckKeyPressed(){
    document.addEventListener('keydown', function(event){
        
    switch(event.key){
        
        case 'ArrowLeft':
            currentDirection='left';
            
            break;
        case 'ArrowRight':
            currentDirection='right';
            
            break;
        case 'ArrowUp' :
            currentDirection='up';
            break;
        case 'ArrowDown' :
            currentDirection='down';

            break;
            default :
            break;
    }
    })
}

const snake= new Snake(SQUARE_SIZE);
const food= new Food;
food.setRandomPosition();
function clearScreen(){
    ctx.clearRect(0,0, GAME_SIZE,GAME_SIZE)
}

function update(){
    deteckKeyPressed()
    clearScreen();
    snake.update();
    food.draw();
    console.log(food.x,food.y)
    setTimeout(update,200);

}
function start (){
   
    update()
}
start()