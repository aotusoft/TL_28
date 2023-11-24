let btns = document.getElementsByClassName("default");
let fan = document.getElementsByClassName("fan")[0];
let btnOff = document.getElementById("off");
let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let btnThr = document.getElementById("thr");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        if (btns[i] === btnOff) {

        } else if (btns[i] === btnOne) {
            btns[i].classList.add("active")
        }
    })
}
