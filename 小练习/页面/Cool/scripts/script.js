let btns = document.getElementsByClassName("default");
let fan = document.getElementsByClassName("fan")[0];
let btnOff = document.getElementById("off");
let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let btnThr = document.getElementById("thr");

function one() {
    fan.classList.remove('one-start');
    if (!fan.classList.contains('two') && !fan.classList.contains('thr')) {
        fan.classList.add('one');
    }
}

// 二档加速后
function two() {
    fan.classList.remove('two-start');
    if (!fan.classList.contains('one') && !fan.classList.contains('thr')) {
        fan.classList.add('two');
    }
}

// 三档加速后
function thr() {
    fan.classList.remove('thr-start');
    if (!fan.classList.contains('one') && !fan.classList.contains('two')) {
        fan.classList.add('thr');
    }
}

// 移除停止状态
function removeStop() {
    fan.classList.remove('one-stop');
    fan.classList.remove('two-stop');
    fan.classList.remove('thr-stop');
}

function checkStop() {
    // 关闭过程不停止，避免卡顿
    return (fan.classList.contains('one-stop') || fan.classList.contains('two-stop') || fan.classList.contains('thr-stop'));
}

function removeStatus() {
    fan.classList.remove('one-stop');
    fan.classList.remove('two-stop');
    fan.classList.remove('thr-stop');
    fan.classList.remove('one');
    fan.classList.remove('two');
    fan.classList.remove('thr');
}

function switchStatus(press, unpressedA, unpressedB) {
    press.classList.add('active');
    unpressedA.classList.remove('active');
    unpressedB.classList.remove('active');
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        if (btns[i] === btnOff) {
            // 加速过程不停止，避免卡顿
            if (fan.classList.contains('one-start') || fan.classList.contains('two-start') || fan.classList.contains('thr-start')) {
                return;
            }
            btnOne.classList.remove('active');
            btnTwo.classList.remove('active');
            btnThr.classList.remove('active');
            if (fan.classList.contains('one'))
                fan.classList.add('one-stop');
            if (fan.classList.contains('two'))
                fan.classList.add('two-stop');
            if (fan.classList.contains('thr'))
                fan.classList.add('thr-stop');
            setTimeout('removeStatus()', 2000);
        } else if (btns[i] === btnOne) {
            if (btnOne.classList.contains('active') || fan.classList.contains('two-start') || fan.classList.contains('thr-start') || checkStop())
                return;
            // 添加按下效果
            switchStatus(btnOne, btnTwo, btnThr)

            // 正在运行则切换速度
            if (fan.classList.contains("two") || fan.classList.contains("thr")) {
                fan.classList.remove("two", "thr");
                fan.classList.add("one")
            } else {
                // 从停止起步
                fan.classList.add('one-start');
                setTimeout('one()', 1990);
            }
        } else if (btns[i] === btnTwo) {
            if (btnTwo.classList.contains('active') || fan.classList.contains('one-start') || fan.classList.contains('thr-start') || checkStop())
                return;
            // 添加按下效果
            switchStatus(btnTwo, btnOne, btnThr)
            // 正在运行则切换速度
            if (fan.classList.contains("one") || fan.classList.contains("thr")) {
                fan.classList.remove("one", "thr");
                fan.classList.add("two")
            } else {
                // 从停止起步
                fan.classList.add('two-start');
                setTimeout('two()', 1990);
            }
        } else if (btns[i] === btnThr) {
            if (btnThr.classList.contains('active') || fan.classList.contains('one-start') || fan.classList.contains('two-start') || checkStop())
                return;
            // 添加按下效果
            switchStatus(btnThr, btnOne, btnTwo)
            // 正在运行则切换速度
            if (fan.classList.contains("one") || fan.classList.contains("two")) {
                fan.classList.remove("one", "two");
                fan.classList.add("thr")
            } else {
                // 从停止起步
                fan.classList.add('thr-start');
                setTimeout('thr()', 1990);
            }
        }
    })
}
