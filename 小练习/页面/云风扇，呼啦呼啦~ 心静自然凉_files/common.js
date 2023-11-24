// 页面状态
$(window).load(function () {
    getVisit();
});
// $(window).bind('beforeunload', function () {
//     return '您输入的内容尚未保存，确定离开此页面吗？';
// });
$(document).on('visibilitychange', function (e) {
    if (e.target.visibilityState === "visible") {
        document.title = '云风扇，呼啦呼啦~ 心静自然凉';
    } else if (e.target.visibilityState === "hidden") {
        document.title = '你电扇关了吗？';
    }
});

// 关闭开关
$('#btn-switch').click(function (_this) {
    // 加速过程不停止，避免卡顿
    if ($('#fan').hasClass('one-start') || $('#fan').hasClass('two-start') || $('#fan').hasClass('thr-start')) {
        return;
    }
    $('#btn-one').removeClass('active');
    $('#btn-two').removeClass('active');
    $('#btn-thr').removeClass('active');
    if ($('#fan').hasClass('one')) {
        $('#fan').addClass('one-stop');
    }
    if ($('#fan').hasClass('two')) {
        $('#fan').addClass('two-stop');
    }
    if ($('#fan').hasClass('thr')) {
        $('#fan').addClass('thr-stop');
    }
    if ($('#fan').hasClass('one') || $('#fan').hasClass('two') || $('#fan').hasClass('thr')) {
        $('#line').addClass('line-progress');
    }
    setTimeout('removeStatus()', 2000);
});
// 一档
$('#btn-one').click(function (_this) {
    if ($('#btn-one').hasClass('active') || $('#fan').hasClass('two-start') || $('#fan').hasClass('thr-start') || checkStop()) {
        return;
    }
    removeStop();
    // 激活按钮
    $('#btn-one').addClass('active');
    $('#btn-two').removeClass('active');
    $('#btn-thr').removeClass('active');
    // 正在运行则切换速度
    if ($('#fan').hasClass('two') || $('#fan').hasClass('thr')) {
        $('#fan').addClass('one');
        $('#fan').removeClass('two');
        $('#fan').removeClass('thr');
    } else {
        // 从停止起步
        $('#fan').addClass('one-start');
        $('#line').addClass('line-progress');
        setTimeout('one()', 1990);
    }
});
// 二挡
$('#btn-two').click(function (_this) {
    if ($('#btn-two').hasClass('active') || $('#fan').hasClass('one-start') || $('#fan').hasClass('thr-start') || checkStop()) {
        return;
    }
    removeStop();
    // 激活按钮
    $('#btn-one').removeClass('active');
    $('#btn-two').addClass('active');
    $('#btn-thr').removeClass('active');
    // 正在运行则切换速度
    if ($('#fan').hasClass('one') || $('#fan').hasClass('thr')) {
        $('#fan').addClass('two');
        $('#fan').removeClass('one');
        $('#fan').removeClass('thr');
    } else {
        // 从停止起步
        $('#fan').addClass('two-start');
        $('#line').addClass('line-progress');
        setTimeout('two()', 1990);
    }
});
// 三挡
$('#btn-thr').click(function (_this) {
    if ($('#btn-thr').hasClass('active') || $('#fan').hasClass('one-start') || $('#fan').hasClass('two-start') || checkStop()) {
        return;
    }
    removeStop();
    // 激活按钮
    $('#btn-one').removeClass('active');
    $('#btn-two').removeClass('active');
    $('#btn-thr').addClass('active');
    // 正在运行则切换速度
    if ($('#fan').hasClass('one') || $('#fan').hasClass('two')) {
        $('#fan').addClass('thr');
        $('#fan').removeClass('one');
        $('#fan').removeClass('two');
    } else {
        // 从停止起步
        $('#fan').addClass('thr-start');
        $('#line').addClass('line-progress');
        setTimeout('thr()', 1990);
    }
});

// 一档加速后
function one() {
    $('#fan').removeClass('one-start');
    $('#line').removeClass('line-progress');
    if (!$('#fan').hasClass('two') && !$('#fan').hasClass('thr')) {
        $('#fan').addClass('one');
    }
}

// 二档加速后
function two() {
    $('#fan').removeClass('two-start');
    $('#line').removeClass('line-progress');
    if (!$('#fan').hasClass('one') && !$('#fan').hasClass('thr')) {
        $('#fan').addClass('two');
    }
}

// 三档加速后
function thr() {
    $('#fan').removeClass('thr-start');
    $('#line').removeClass('line-progress');
    if (!$('#fan').hasClass('one') && !$('#fan').hasClass('two')) {
        $('#fan').addClass('thr');
    }
}

// 移除停止状态
function removeStop() {
    $('#fan').removeClass('one-stop');
    $('#fan').removeClass('two-stop');
    $('#fan').removeClass('thr-stop');
}

function checkStop() {
    // 关闭过程不停止，避免卡顿
    return ($('#fan').hasClass('one-stop') || $('#fan').hasClass('two-stop') || $('#fan').hasClass('thr-stop'));
}

function removeStatus() {
    $('#line').removeClass('line-progress');
    $('#fan').removeClass('one-stop');
    $('#fan').removeClass('two-stop');
    $('#fan').removeClass('thr-stop');
    $('#fan').removeClass('one');
    $('#fan').removeClass('two');
    $('#fan').removeClass('thr');
}

function turnOne() {
    $('#fan').css({
        "transform": "rotate(360deg)",
        "animation-name": "rotation",
        "animation-duration": "1s",
        "animation-iteration-count": "infinite",
        "animation-timing-function": "linear"
    });
}

function uploadFan(_this, redirect = false) {
    if (redirect) {
        window.location = '/login';
    }
    console.log(_this)
    $('#btn-file').trigger('click');
}

$('#btn-file').change(function(){
    if($(this).val()){
        console.log($(this).val())
        $('.btn-custom-fan').addClass('disabled' );
        $(this).parent().submit();
    }
});
