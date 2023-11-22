let parent = $("#swiper")[0];
let child = $("#center")[0];
let imgElement = $("#center>img")[0];
let num = 0

function Swiper() {
    let step = 0;
    let maxStep = 10;
    let everyStep = ((imgElement.clientWidth * num) - parent.scrollLeft) / maxStep;

    let interval = setInterval(function () {
        if (step < maxStep) {
            parent.scrollLeft = parent.scrollLeft + everyStep;
        } else {
            clearInterval(interval)
        }
        step++
    },10);
    num++

    if (num === 3) {
        num = 0;
    }
}
