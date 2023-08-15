function ContentShowAndHide(hoveredElement, operatedElement) {
    hoveredElement.onmouseenter = function () {
        // hoveredElement.style.backgroundColor = 'white';
        operatedElement.style.display = 'block';
    };
    hoveredElement.onmouseleave = function () {
        // hoveredElement.style.backgroundColor = 'blue';
        operatedElement.style.display = 'none';
    };
}

function tabSwitch() {
    let info = $("#info-btn")[0];
    let service = $("#service-btn")[0];
    let tab1 = $("#tab-1")[0];
    let tab2 = $("#tab-2")[0];

    console.log(info)
    console.log(service)
    info.onmouseenter = function () {
        tab1.style.display = "block";
        tab2.style.display = "none";
    }
    service.onmouseenter = function () {
        tab2.style.display = "block";
        tab1.style.display = "none";
    }
}

function ElementPop() {
    var slidePx = 0;
    let toolsArea = $(".tools-area")[0];
    let toTop = $(".to-top")[0];
    let pop = $(".pop")[0];

    toTop.onmouseenter = function () {
        let time = setInterval(function () {
            pop.style.left = slidePx + "px";
            slidePx -= 2;
            if (slidePx === -98) {
                slidePx = 0;
                clearInterval(time)
            }
        }, 1)
    }
    toTop.onclick = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    toTop.onmouseleave = function () {
        let time = setInterval(function () {
            pop.style.left = slidePx + "px";
            slidePx += 2;
            if (slidePx === 32) {
                slidePx = 0;
                clearInterval(time)
            }
        }, 1)
        pop.style.left = "32px";
    }
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop + document.body.scrollTop <= 300) {
            toolsArea.style.display = "none";
        } else {
            toolsArea.style.display = "block";
        }
    })
}

function CloseAd() {
    let ad = $(".ad-area")[0];
    let close = $(".ad-area>i")[0];
    close.onclick = function () {
        ad.style.display = "none"
    }
}