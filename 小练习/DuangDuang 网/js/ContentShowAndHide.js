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