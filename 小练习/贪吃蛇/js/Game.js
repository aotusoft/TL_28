/* 
   游戏对象
        属性：食物、蛇节、地图
        方法：游戏开始
*/
function Game(food, snake, gameZone) {
    this.food = food
    this.snake = snake
    this.gameZone = gameZone
}

Game.prototype.renderGame = function () {
    this.food.renderFood()
    this.snake.renderSnake()
}

Game.prototype.startGame = function () {
    setInterval(function () {
        this.snake.moveSnake()
    }.bind(this), 1000)
}