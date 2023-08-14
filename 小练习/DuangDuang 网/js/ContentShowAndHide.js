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
    let tab = $(".tab")[0];
    let tab1 = $("#tab-1")[0];
    let tab2 = $("#tab-2")[0];

    console.log(tab1)
    info.onmouseover = function () {
        tab1.setProperty("display", "block");
        tab2.setProperty("display", "none");
    }
    service.onmouseover = function () {
        tab2.setProperty("display", "block");
        tab1.setProperty("display", "none");
    }
}

function ElementPop() {
    let toTop = $(".to-top")[0];
    let pop = $(".pop")[0];
    
    toTop.onmouseenter = function () {
        console.log("1")
        // alert(1)
        pop.style.left = "-96px";
    }
    toTop.onclick = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    toTop.onmouseleave = function () {
        console.log("1")
        // alert(1)
        pop.style.left = "32px";
    }
}

function CloseAd() {
    let ad = $(".ad-area")[0];
    let close = $(".ad-area>i")[0];
    close.onclick = function () {
        ad.style.display = "none"
    }
}