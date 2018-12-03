var aBeKilled = JSON.parse(sessionStorage.getItem('aBeKilled')),//被殺玩家
    aVoted = JSON.parse(sessionStorage.getItem('aBeVoted')),//被投玩家
    days = JSON.parse(sessionStorage.getItem("days")),
    allPeople = JSON.parse(sessionStorage.getItem("role"));//全部玩家


console.log(aBeKilled);
console.log(aVoted);
console.log(allPeople);

$(document).ready(function () {
    if (days) {
        day = days;
    }
    else {
        day = 1;
    }
    console.log(day);
    $(".voteButton").click(function () {
        if (fsm.state === "off") {
            alert("杀个人再走吧")
        }
        else {
            fsm.initial();
            window.history.go(-1);
            day++;
            JSON.stringify(sessionStorage.setItem("days", day));//保存时间，每次点击确定+1
        }
    });//返回法官台本
    //for循环添加玩家身份div
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

    var fsm = new StateMachine({
        init: "off",
        transitions: [
            {name: 'killed', from: 'off', to: 'on'},
            {name: 'initial', from: 'on', to: 'off'}
        ]
    });

    $(".role").click(function () {
        $(this).find(".operation").show();
        $(this).siblings().find(".operation").hide();
    });

    if (aBeKilled) {
        for (var b = 0; b < aBeKilled.length; b++) {
            $(".diving").eq(aBeKilled[b].id - 1).css("background-color", "#83b09a");
        }
    }
    if (aVoted) {
        for (var c = 0; c < aVoted.length; c++) {
            $(".diving").eq(aVoted[c].id - 1).css("background-color", "#83b09a");
        }
    }

//创建被投玩家数组
    if (aVoted) {
        aVotedPeople = aVoted;
    }
    else {
        aVotedPeople = [];
    }
    console.log(aVotedPeople);

    //小刀
    $(".killButton").click(function () {
            var role = $(this).parent().prev(".diving");//获取刀按钮div的兄弟元素
            var roleId = role.find(".name").text();     //获取兄弟元素的名字
            a = Number(role.find(".number").text()) - 1;//头像下标-1
            if (fsm.state === "on") {
                alert("已完成杀人，请进入下一步")
            }
            //杀人判断
            else if (role.css('background-color') === 'rgb(131, 176, 154)') {
                confirm("当前玩家已死亡，请选择其他玩家")
            }

            else {
                var result = confirm("你确定要投出这个人吗");
                if (result === true) {
                    fsm.killed();
                    role.css("background-color", "#83b09a");
                    allPeople[a].state = "被投死";           //更改玩家数组角色的死活状态
                    allPeople[a].day = day;
                    aVotedPeople.push(allPeople[a]);
                    console.log(aVotedPeople);
                    sessionStorage.setItem('aBeVoted', JSON.stringify(aVotedPeople));//保存被投玩家
                    sessionStorage.setItem('role', JSON.stringify(allPeople));//全部玩家状态
                    console.log(allPeople);
                    //判断游戏是否结束
                    var oLivePeople = allPeople.filter(val => {
                        return val.state === '存活' && val.name === '平民'
                    });
                    var oLiveKiller = allPeople.filter(val => {
                        return val.state === '存活' && val.name === '杀手'
                    });
                    if (oLiveKiller.length===0){
                        alert("游戏结束");
                        window.location.href = '../html/task13_3.html';
                    }
                    console.log(oLivePeople, oLiveKiller);
                }
            }

        }
    );
});

