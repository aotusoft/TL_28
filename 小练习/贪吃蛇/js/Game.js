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
    // 调用游戏开始方法
    this.startGame()
    // 调用游戏控制蛇节方向
    this.movePosition()
}

Game.prototype.startGame = function () {
    let interval = setInterval(function () {
        // 删除蛇节
        this.snake.deleteSnake()
        // 调用蛇节移动函数
        this.snake.moveSnake()
        // 渲染蛇节
        this.snake.renderSnake()
    }.bind(this), 500);
    // clearInterval(interval)
}

// 声明控制蛇节移动的方向
Game.prototype.movePosition = function () {
    var that = this
    // 给document绑定键盘抬起事件
    document.onkeyup = function () {
        var event = event || window.event
        console.log(event.keyCode)
        switch (event.keyCode) {
            case 37:
                that.snake.direction = 'left'
                break
            case 38:
                that.snake.direction = 'top'
                break
            case 39:
                that.snake.direction = 'right'
                break
            case 40:
                that.snake.direction = 'bottom'
                break
            default:
                break
        }
    }
}