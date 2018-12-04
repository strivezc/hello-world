var allPeople = JSON.parse(sessionStorage.getItem('role')),//全部玩家
    aDeath = JSON.parse(sessionStorage.getItem('aBeKilled')),//被杀
    aVoted = JSON.parse(sessionStorage.getItem('aBeVoted')),//被投
    days = JSON.parse(sessionStorage.getItem("days"));//天数
console.log(allPeople);
console.log( aDeath, aVoted);

$(document).ready(function () {
    //判断第几天
    if (days) {
        day = days;
    }
    else {
        day = 1;
    }
    //返回法官台本
    $(".voteButton").click(function () {
        if (fsm.state === "off") {
            alert("杀个人再走吧")
        }
        else {
            window.history.go(-1);
        }
    });

    //for循环添加玩家div
    for (var i = 0; i < allPeople.length; i++) {
        var display = "<div class=\"role\">\n" +
            "<div class=\"diving\">\n" +
            "<div class=\"name tc\">" + (allPeople[i]).name + "</div>\n" +
            "<div class=\"number tc white-color\">" + (allPeople[i]).id + "</div>\n" +
            "</div>\n" +
            "<div class=\"operation\">\n" +
            "<button class=\" killButton bcg-white\"></button>\n" +
            "</div>\n" +
            "</div>";
        $(".li").append(display);
    }
    //状态机；用来判断是否已杀过人
    var fsm = new StateMachine({
        init: "off",
        transitions: [
            {name: 'killed', from: 'off', to: 'on'},
            {name: 'initial', from: 'on', to: 'off'}
        ]
    });

    //点击头像显示刀
    $(".role").click(function () {
        $(this).find(".operation").show();
        $(this).siblings().find(".operation").hide();
    });
    //判断初始被杀数组
    if (aDeath) {
        aDiePeople = aDeath;
    }
    else {
        aDiePeople = [];
    }
    //杀人按钮
    $(".killButton").click(function () {
            var role = $(this).parent().prev(".diving");//获取刀按钮的兄弟元素头像div
            var roleId = role.find(".name").text();     //获取头像的名字
            a = Number(role.find(".number").text()) - 1;//头像下标-1
            if (fsm.state === "on") {
                alert("已完成杀人，请进入下一步")
            }
            //杀人判断
            else if (roleId === "杀手") {
                alert("你不能杀自己人")
            }
            else if (role.css('background-color') === 'rgb(131, 176, 154)') {
                confirm("当前玩家已死亡，请选择其他玩家")
            }
            else {
                var result = confirm("你确定要杀这个人吗");
                if (result === true) {
                    fsm.killed();
                    role.css("background-color", "#83b09a");
                    allPeople[a].state = "被杀死";           //更改玩家数组角色的死活状态
                    allPeople[a].day = day;                  //更改玩家数的死亡时间
                    aDiePeople.push(allPeople[a]);
                    sessionStorage.setItem('aBeKilled', JSON.stringify(aDiePeople));//保存被杀
                    sessionStorage.setItem('role', JSON.stringify(allPeople));//更新全部玩家
                    //判断游戏是否结束
                    var oLivePeople = allPeople.filter(val => {
                        return val.state === '存活' && val.name === '平民' //剩余平民数组对象
                    });
                    var oLiveKiller = allPeople.filter(val => {
                        return val.state === '存活' && val.name === '杀手' //剩余杀手数组对象
                    });
                    if (oLiveKiller.length >= oLivePeople.length) {
                        alert("游戏已结束");
                        window.location.href = '../html/task13_3.html';
                    }
                    console.log(oLivePeople, oLiveKiller);
                }
            }
        }
    );

    //每次进入杀人界面用被杀与被投玩家数组遍历一次背景颜色
    if (aDiePeople) {
        for (var b = 0; b < aDiePeople.length; b++) {
            $(".diving").eq(aDiePeople[b].id - 1).css("background-color", "#83b09a");
        }
    }
    if (aVoted) {
        for (var c = 0; c < aVoted.length; c++) {
            $(".diving").eq(aVoted[c].id - 1).css("background-color", "#83b09a");
        }
    }
});