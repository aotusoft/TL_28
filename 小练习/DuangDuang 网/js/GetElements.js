
// 这个架构和之前的架构有本质上的区别
var $ = JQuery = (function(){
    function markArray(selector) {
        let arr = document.querySelectorAll(selector);
        return arr;
    }
    // 第一步：定义一个局部变量
    var $ = function (selector) {
        return markArray(selector);
    };
    // 自己实现继承
    $.extend = function(target) {
        // 如何进行扩展呢？
        // 我们需要用到 for 循环
        // 为什么要从1开始？
        // 因为 在函数内部有一个 arguments 对象， arguments 这个参数代表的是，调用这个函数所有的参数，即 NodeList 和扩展内容，我们只需要遍历扩展内容
        for (var i = 1; i < arguments.length; i++) {
            // 再次循环遍历出扩展的内容
            for(var prop in arguments[i]) {
                // 一个个加到这个里面来
                target[prop] = arguments[i][prop];
            }
        }
        // ruturn 给了$.fn
        return target;
    };
    // 第二步：基于 NodeList 进行扩展，将后面所有的对象全部扩展到这个里面去，这个思路要好好捋一捋
    // 直接说了，这个代码的意思就是，我调用了一个继承的方法，这个继承的方法在上面自己写，用来传入一些参数，进行扩展
    // 相当于(target,exd1,exd2,exd3)将 exd1,exd2,exd3的方法扩展给 target
    // 当 target return 出去的时候，这个时候的 target 就是一个超级 NodeList
    // $.fn 的用途以后再说
    $.fn = $.extend(NodeList.prototype, {
        each: function(callback) {
            for (var i = 0; i < this.length; i++) {
                callback.call(this, i ,this[i]);
            }
            // 要想能进行链式操作，所有方法都需要 return this，但其实只需要在 each 方法里 return 就可以了，其他方法只需要将自己的调用 return 出来
            return this;
        },
        html: function(callback) {
            return this.each(function(index, object) {
                object.innerHTML = html;
            });
        }
    });
    return $;
})();