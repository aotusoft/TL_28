const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // 给对应元素绑定active类
}
//但是有个问题，当我们点击链接时，汉堡菜单不会关闭。
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  // 去掉active类
}
// 下面实现点击切换背景
navLink.forEach((i) => {
  i.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--bground-url",
      "url(../IMG/" + i.id + ".jpg)"
    );
  });
});
