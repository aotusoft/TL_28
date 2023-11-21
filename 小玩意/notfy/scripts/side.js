function side(t, e, i) {
    "use strict";
    function n() {
        $(document).ready(function() {
            function t() {
                var t = e();
                $("#sidebar").height() < $("#content").height() && n.affix({
                    offset: {
                        top: t - 2 * CONFIG.sidebar.offset,
                        bottom: 540
                    }
                })
            }
            function e() {
                return $(".header-inner").height() + CONFIG.sidebar.offset
            }
            function i() {
                $(window).off(".affix"),
                n.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),
                t()
            }
            var n = $(".sidebar-inner");
            t(),
            function() {
                window.matchMedia("(min-width: 991px)").addListener(function(t) {
                    t.matches && i()
                })
            }()
        })
    }
    t.exports = n
}
side()