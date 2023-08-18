function Food(width, height, backgroundColor, position, left, top) {
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.position = "absolute";
    this.backgroundColor = backgroundColor;
}

Food.prototype.renderFood = function () {
    let foodBox = gameZone.appendChild(document.createElement("div"));
    foodBox.style.width = this.width + 'px'
    foodBox.style.height = this.height + 'px'  // 最小值：0  最大值：780   39个20
    // 0.999  * 800
    this.left = parseInt((Math.random() * gameZone.clientWidth) / this.width) * this.width
    this.top = parseInt((Math.random() * gameZone.clientHeight) / this.height) * this.height
    foodBox.style.left = this.left + 'px'
    foodBox.style.top = this.top + 'px'
    foodBox.style.position = this.position;
    foodBox.style.backgroundColor = this.backgroundColor;
}