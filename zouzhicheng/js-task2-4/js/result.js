var aDeath = JSON.parse(sessionStorage.getItem('aBeKilled')),//被杀
    aVoted = JSON.parse(sessionStorage.getItem('aBeVoted')),//被投
    allPeople = JSON.parse(sessionStorage.getItem("role")),//全部玩家
    days = JSON.parse(sessionStorage.getItem("days")),//天数
    oLivePeople = allPeople.filter(val => {
        return val.state === '存活' && val.name === '平民'
    }),                                                   //剩余平民
    oLiveKiller = allPeople.filter(val => {
        return val.state === '存活' && val.name === '杀手'
    }),                                                    //剩余杀手
    leave = $(".details span");                 //选择剩余玩家div的span元素
console.log(allPeople);
$(function () {
    //清除sessionStorage
    $(".button1").click(function () {
        window.location.href = '../html/task13_1.html';
        sessionStorage.clear();
    });
    //剩余玩家人数
    leave.eq(0).text("杀 手 " + oLiveKiller.length + " 人");
    leave.eq(1).text("平 民 " + oLivePeople.length + " 人");
    //每天详情
    for (var i = 0; i < aDeath.length; i++) {
        var night = "<li class=\"li\">\n" +
            "<div class=\"clearfix\">\n" +
            "<span class=\"color-515 fl\">第" + (i + 1) + "天</span>\n" +
            "</div>\n" +
            "<p class=\"color-a6a \">晚上：" + aDeath[i].id + "号被杀手杀死，"
            + aDeath[i].id + "号是" + aDeath[i].name + "</p>\n" +
            "\n" +
            "</li>";
        $(".dailyDetails").append(night);
    }
    for (var i = 0; i < aVoted.length; i++) {
        var day = " <p class=\"color-a6a \">白天：" + aVoted[i].id + "号被全民投死，"
            + aVoted[i].id + "号是" + aVoted[i].name + "</p>";
        $(".li").eq(i).append(day);
    }
});