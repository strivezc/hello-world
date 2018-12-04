var aRole = JSON.parse(sessionStorage.getItem('role')),//页面数组传递
    aDeath = JSON.parse(sessionStorage.getItem('aBeKilled')),//被杀
    aVoted = JSON.parse(sessionStorage.getItem('aBeVoted')),//被投
    state = sessionStorage.getItem("state");
console.log(aRole);
$(document).ready(function () {
    $(".voteButton").click(function () {
        window.location.href = '../html/Judge-Diary.html';
    });//下一页
    $(".return").click(function () {
        window.location.href = '../html/identity.html';
    });

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
//改变已死玩家背景颜色
    if (aDeath) {
        for (var b = 0; b < aDeath.length; b++) {
            $(".diving").eq(aDeath[b].id - 1).css("background-color", "#83b09a");
        }
    }
    if (aVoted) {
        for (var c = 0; c < aVoted.length; c++) {
            $(".diving").eq(aVoted[c].id - 1).css("background-color", "#83b09a");
        }
    }
    if (state) {
        $(".voteButton").text("返回");
    }
});
