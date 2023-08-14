let parent = $("#swiper")[0];
let child = $("#center")[0];
let imgElement = $("#center>img")[0];
let num = 0 //控制整个轮播图

function Swiper() {
    if (num === 3) {
        num = 0;
    }
    
    let step = 0;
    let maxStep = 10;
    let everyStep = ((imgElement.clientWidth * num) - parent.scrollLeft) / maxStep;

    let interval = setInterval(function () {
        step++
        if (step <= maxStep) {
            parent.scrollLeft = parent.scrollLeft + everyStep;
            // console.log(parent.scrollLeft)
        } else {
            clearInterval(interval)
        }
    },20);
    
    num++
}
