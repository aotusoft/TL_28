// 访问
$(window).on('load', function () {
    visit();
    // getVisit();
});

function visit() {
    let module = $('#statistics-module').text();
    let user_id = $('#auth-id').text();
    $.ajax({
        method: 'POST',
        url: '/api/visit',
        data: {
            "module": module,
            "user_id": user_id
        },
        success: function (item) {
            console.log(module + ':success');
        }
    })
}

// 获取访问人数
function getVisit() {
    let module = $('#statistics-module').text();
    $.ajax({
        url: '/api/visit',
        data: {
            "module": module
        },
        success: function (item) {
            $('#statistics-module-total').text(item.data);
        }
    })
}
