let liE = $(".partition>li");
for (let i = 0; i < (liE.length); i++) {

    liE[i].onmouseenter = function () {
        liE[i].style.borderRight = "none"
    };
}