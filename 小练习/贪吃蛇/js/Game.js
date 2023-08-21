/* 
   游戏对象
        属性：食物、蛇节、地图
        方法：游戏开始
*/
function Game(food, snake, gameZone) {
    this.food = food;
    this.snake = snake;
    this.gameZone = gameZone;
}

Game.prototype.renderGame = function () {
    this.food.renderFood();
    this.snake.renderSnake();
    // 调用游戏开始方法
    this.startGame();
    // 调用游戏控制蛇节方向
    this.movePosition();
}

Game.prototype.startGame = function () {
    let interval = setInterval(function () {

        // 蛇头的临界值  39
        let x = this.snake.body[0].x;
        let y = this.snake.body[0].y;
        let maxX = this.gameZone.clientWidth / this.snake.width - 1;
        let maxY = this.gameZone.clientHeight / this.snake.height - 1;
        if (x > 0 && x < maxX && y > 0 && y < maxY) {
            // 删除蛇节
            this.snake.deleteSnake();
            // 调用蛇节移动函数
            this.snake.moveSnake(this.food);
            // 渲染蛇节
            this.snake.renderSnake();
        } else {
            alert('游戏结束');
            clearInterval(interval);
        }
    }.bind(this), 250);
}

// 声明控制蛇节移动的方向
Game.prototype.movePosition = function () {
    let that = this
    // 给document绑定键盘抬起事件
    document.onkeydown = function () {
        var event = event || window.event
        console.log(event.keyCode)
        switch (event.keyCode) {
            case 37:
                that.snake.direction = 'left';
                break
            case 38:
                that.snake.direction = 'top';
                break
            case 39:
                that.snake.direction = 'right';
                break
            case 40:
                that.snake.direction = 'bottom';
                break
            default:
                break
        }
    }
}