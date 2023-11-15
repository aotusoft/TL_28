if (window.CONFIG.favicon.visibilitychange) {
  // title变化
  window.originTitle = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.querySelector('link[rel="icon"]').setAttribute('href', window.CONFIG.favicon.hidden);
      document.title = window.CONFIG.favicon.hide_text;
      clearTimeout(titleTime);
    }
    else {
      document.querySelector('link[rel="icon"]').setAttribute('href', window.CONFIG.favicon.narmal);
      document.title = window.CONFIG.favicon.show_text + window.originTitle;
      titleTime = setTimeout(function () {
        document.title = window.originTitle;
      }, 2000);
    }
  });

}
