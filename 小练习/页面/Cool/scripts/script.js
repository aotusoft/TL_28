let btns = document.getElementsByClassName("default");
let fan = document.getElementsByClassName("fan")[0];
let element = null;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        let element = event.target.innerText;
        if (element === "关") {
            fan.removeAttribute("class");
            fan.setAttribute("class","fan");
        }
    })
}