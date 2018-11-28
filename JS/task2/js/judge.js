var aRole = JSON.parse(sessionStorage.getItem('role'));//页面数组传递
console.log(aRole);
$(document).ready(function () {
    $(".menuButton").click(function () {
        window.location.href = '../html/player-distribution.html';
    });//下一页
    $(".return").click(function () {
        window.location.href = '../html/identity.html';
    })

    //for循环添加玩家身份div
    for (var i = 0; i < aRole.length; i++) {
        var display = "<div class=\"role\">\n" +
            "<div class=\"diving\">\n" +
            "<div class=\"name tc\">" + (aRole[i]).name + "</div>\n" +
            "<div class=\"number tc white-color\">" + (aRole[i]).id + "</div>\n" +
            "</div>\n" +
            "<div class=\"operation\">\n" +
            "<button class=\" killButton bcg-white\"></button>\n" +
            "</div>\n" +
            "</div>";
        $(".li").append(display);
    }
});
