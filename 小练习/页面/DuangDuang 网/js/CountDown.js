// 补0函数
function formatTime(t) {
    t = t >= 10 ? t : '0' + t
    return t
}

function timeShow(hour,minute,second,time) {
    second.innerText = formatTime(time % 60);
    minute.innerText = formatTime(parseInt((time / 60) % 60));
    hour.innerText = formatTime(parseInt(time / 60 / 60) % 24);
}

function CountDown(time) {
    let hour = $("#hour")[0];
    let minute = $("#minute")[0];
    let second = $("#second")[0];
    
    setInterval(function () {
        time--
        timeShow(hour,minute,second,time)
    },1000)
    
}