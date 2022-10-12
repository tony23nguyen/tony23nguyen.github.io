const {GRID_SIZE} = require('./constants');

module.exports = {
    initGame,
    gameLoop,
    getUpdatedVelocity,
}

function initGame(){
    const state = createGameState()
    randomFood(state);
    return state;
}

function createGameState(){
//game state object, size of snake and where the food is
return{
    players: [{
        pos: {
            x: 3,
            y: 10,
        },
        vel: {
            x: 1,
            y: 0,
        },
        snake: [
            {x: 1, y: 10},
            {x: 2, y: 10},
            {x: 3, y: 10},
        ],
       },  {
        pos: {
            x: 18,
            y: 10,
        },
        vel: {
            x: 0,
            y: 0,
        },
        snake: [
            {x: 20, y: 10},
            {x: 19, y: 10},
            {x: 18, y: 10},
        ],
    }],
    food: {},
    gridsize: GRID_SIZE,
    active: true,
    };
}

function gameLoop(state){
    if(!state){
        return;
    }
    //update player position based on the velocity
    const playerOne = state.players[0];
    const playerTwo = state.players[1];
    //p1
    playerOne.pos.x += playerOne.vel.x;
    playerOne.pos.y += playerOne.vel.y;
    //p2
    playerTwo.pos.x += playerTwo.vel.x;
    playerTwo.pos.y += playerTwo.vel.y;

    //check if player is in the grid //p1
    if(playerOne.pos.x < 0 || playerOne.pos.x > GRID_SIZE || playerOne.pos.y < 0 || playerOne.pos.y > GRID_SIZE ){
        return 2;
    }

    //p2 border check
    if(playerTwo.pos.x < 0 || playerTwo.pos.x > GRID_SIZE || playerTwo.pos.y < 0 || playerTwo.pos.y > GRID_SIZE ){
        return 1;
    }

    //check if snake has eaten food and update the size //p1
    if(state.food.x === playerOne.pos.x && state.food.y === playerOne.pos.y){
        playerOne.snake.push({...playerOne.pos})
        playerOne.pos.x += playerOne.vel.x;
        playerOne.pos.y += playerOne.vel.y;
        randomFood(state);
    }

    //p2 food check
    if(state.food.x === playerTwo.pos.x && state.Two.y === playerTwo.pos.y){
        playerTwo.snake.push({...playerTwo.pos})
        playerTwo.pos.x += playerTwo.vel.x;
        playerTwo.pos.y += playerTwo.vel.y;
        randomFood(state);
    }
    //check if snake has hit itsel and return other player as the winner.
    //p1 movement and self check
    if(playerOne.vel.x || playerOne.vel.y){
        for(let cell of playerOne.snake){
            if(cell.x === playerOne.pos.x && cell.y === playerOne.pos.y ){
                return 2
            }
        }
        //update position of the snake by moving it forward and popping off the last cell
        playerOne.snake.push({...playerOne.pos});
        playerOne.snake.shift();
    
    //p2 movement and check
    }
    if(playerTwo.vel.x || playerTwo.vel.y){
        for(let cell of playerTwo.snake){
            if(cell.x === playerTwo.pos.x && cell.y === playerTwo.pos.y ){
                return 1
            }
        }
        //update position of the snake by moving it forward and popping off the last cell
        playerTwo.snake.push({...playerTwo.pos});
        playerTwo.snake.shift();
    }

    return false;

}

//randomize the pos of food
function randomFood(state){
    food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
    }
    for (let cell of state.players[0].snake) {
        if (cell.x === food.x && cell.y === food.y) {
          return randomFood(state);
        }
      }
    
      for (let cell of state.players[1].snake) {
        if (cell.x === food.x && cell.y === food.y) {
          return randomFood(state);
        }
      }
    state.food = food;
}

function getUpdatedVelocity (keyCode){
    switch (keyCode) {
        case 37: { //left
            return {x:-1, y:0};
        }
    
        case 39: { //right
            return {x:1, y:0};
        }
    
        case 40: { //up
            return {x:0, y:1};
        }
    
        case 38: { //down
            return {x:0, y:-1};
        }
    }
}