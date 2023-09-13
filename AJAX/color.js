// 封装一个随机色函数
function changeColor() {
  // 0-1  0-255
  var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)

  return '(' + red + ',' + green + ',' + blue + ')'
}
