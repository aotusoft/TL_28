function Food(width, height, backgroundColor, position, left, top,foodArr) {
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.position = "absolute";
    this.backgroundColor = backgroundColor;
    this.foodArr = foodArr;
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
    this.foodArr.push(foodBox)
}


// 删除食物方法
Food.prototype.deleteFood = function () {
    for (let i = this.foodArr.length - 1; i >= 0; i--) {
        this.foodArr[i].parentNode.removeChild(this.foodArr[i])
        // 删除的只是数组数据，在删除之前已经渲染到DOM中了。所以得删除DOM
        this.foodArr.splice(i, 1)
    }
}