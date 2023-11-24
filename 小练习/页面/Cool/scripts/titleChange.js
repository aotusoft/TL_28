document.addEventListener('visibilitychange', function (e) {
    if (e.target.visibilityState === "visible") {
        document.title = '云风扇，呼啦呼啦~ 心静自然凉';
    } else if (e.target.visibilityState === "hidden") {
        document.title = '你电扇关了吗？';
    }
})