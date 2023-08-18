function Snake(width, height, direction, headColor, bodyColor) {
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
}

Snake.prototype.renderSnake = function () {
    // 创建3个蛇节
    for (let i = 0; i < this.body.length; i++) {
        let snakeBox = gameZone.appendChild(document.createElement('div'))
        snakeBox.style.width = this.width + 'px'
        snakeBox.style.height = this.height + 'px'
        snakeBox.style.position = this.position
        snakeBox.style.backgroundColor = this.body[i].color
        snakeBox.style.left = this.body[i].x * this.width + 'px'
        snakeBox.style.top = this.body[i].y * this.height + 'px'
    }
}

Snake.prototype.moveSnake = function () {
    this.changeSnake()
    this.body[0].y++;

}

Snake.prototype.changeSnake = function () {
    // 让 蛇中当做蛇头，让蛇尾当做蛇中，目的就是为了只控制蛇头方向
    // i = 2 蛇尾
    // i = 1 蛇中
    // i = 0 蛇头
    for (let i = this.body.length - 1; i > 0; i++) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
    }
}