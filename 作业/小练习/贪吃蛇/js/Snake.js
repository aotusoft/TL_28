function Snake(width, height, direction, headColor, bodyColor, snakeArr) {
    this.width = width;
    this.height = height;
    this.position = "absolute";
    this.direction = direction;
    this.headColor = headColor;
    this.bodyColor = bodyColor;
    this.body = [
        // 蛇头
        {
            x: 3,
            y: 1,
            color: this.headColor,
        }, {
            x: 2,
            y: 1,
            color: this.bodyColor,
        }, {
            x: 1,
            y: 1,
            color: this.bodyColor,
        }
    ]
    this.snakeArr = snakeArr
}

Snake.prototype.renderSnake = function () {
    // 创建3个蛇节
    for (let i = 0; i < this.body.length; i++) {
        let snakeBox = gameZone.appendChild(document.createElement('div'))
        snakeBox.style.width = this.width + 'px';
        snakeBox.style.height = this.height + 'px';
        snakeBox.style.position = this.position;
        snakeBox.style.backgroundColor = this.body[i].color;
        snakeBox.style.left = this.body[i].x * this.width + 'px';
        snakeBox.style.top = this.body[i].y * this.height + 'px';
        this.snakeArr.push(snakeBox);
    }
    // 将每个蛇节盒子当做数组的元素，
    console.log(this.snakeArr)
}

// 蛇节移动方法
Snake.prototype.moveSnake = function (food) {
    // 调用蛇身转蛇头函数
    this.changeSnake();

    // 调用蛇节方向改变函数
    this.changePosition();

    // 渲染蛇节
    this.renderSnake();

    // 蛇吃食物
    this.eatFood(food);
}

// 蛇尾 蛇身位置改变方法
Snake.prototype.changeSnake = function () {
    // 让 蛇中当做蛇头，让蛇尾当做蛇中，目的就是为了只控制蛇头方向
    // i = 2 蛇尾
    // i = 1 蛇身
    // i = 0 蛇头
    for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
    }
}

// 多余蛇尾 蛇身删除方法
Snake.prototype.deleteSnake = function () {
    for (let i = this.snakeArr.length - 1; i >= 0; i--) {
        // 删除DOM已经渲染的3个div蛇节元素
        // 删除子元素：父元素.removeChild(子元素)
        this.snakeArr[i].parentNode.removeChild(this.snakeArr[i])
        // 删除数组数据
        this.snakeArr.splice(i, 1);
        // this.snakeArr.pop();
    }
}
// 声明一个蛇节方向改变的函数
Snake.prototype.changePosition = function () {
    switch (this.direction) {
        case 'right':
            this.body[0].x++;
            break
        case 'left':
            this.body[0].x--;
            break
        case 'top':
            this.body[0].y--;
            break
        case 'bottom':
            this.body[0].y++;
            break
        default:
            break
    }
}

// 声明一个蛇吃食物的函数
Snake.prototype.eatFood = function (food) {
    // 当蛇头与食物重合（left/top）,食物消失，蛇尾变长，渲染新食物
    let snakeHeadX = this.body[0].x * this.width //蛇头的left
    let snakeHeadY = this.body[0].y * this.width //蛇头的top
    // console.log(food)
    if (snakeHeadX === food.left && snakeHeadY === food.top) {
        // 食物消失，
        food.deleteFood();
        // 蛇尾变长，
        this.body.push({
            x: this.body[this.body.length - 1].x,
            y: this.body[this.body.length - 1].y,
            color: this.bodyColor,
        })
        this.renderSnake();
        // 渲染新食物
        food.renderFood();
    }
}