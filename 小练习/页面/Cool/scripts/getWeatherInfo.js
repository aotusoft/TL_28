let url = "https://api.seniverse.com/v3/weather/now.json?key=SR7pVEP13QXlYlV3I&location=Shijiazhuang&language=zh-Hans&unit=c";
let temp = document.getElementById("t-value");
let xmlHttpRequest;

if (window.XMLHttpRequest) {
    xmlHttpRequest = new XMLHttpRequest();
} else {
    xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlHttpRequest.open("GET", url, true);
xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
        let responseText = xmlHttpRequest.responseText;
        let data = JSON.parse(responseText);
        temp.innerText = data.results[0].now.temperature
    }
}
xmlHttpRequest.send();