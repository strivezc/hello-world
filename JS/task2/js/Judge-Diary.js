var allPeople = JSON.parse(sessionStorage.getItem('role')),//所有玩家
    aBeKilled = JSON.parse(sessionStorage.getItem('aBeKilled')),//被杀玩家
    aVoted = JSON.parse(sessionStorage.getItem('aBeVoted')),//被投玩家
    num = JSON.parse(sessionStorage.getItem("days")),//天数传递
    state = sessionStorage.getItem("state");
console.log(allPeople);
console.log(aBeKilled, aVoted);
console.log(state);

$(document).ready(function () {
    if (num) {
        day = num;//保存的时间
    }
    else {
        day = 1;//初始的时间
    }

//选择动态killing的id
    var killing = "#killing" + (day),
        words = "#words" + (day),
        speak = "#speak" + (day),
        vote = "#vote" + (day);

    //生成下一天的信息
    if (day > 1) {
        for (var i = 0; i < day - 1; i++) {
            var a = $("#day").clone(true);
            a.attr('id', 'day' + (i + 2));
            a.text("第" + (i + 2) + "天");
            b = $("#item1").clone(true).attr('id', 'item' + (i + 2));
            b.find("#killing1").attr("id", "killing" + (i + 2));
            b.find("#words1").attr("id", "words" + (i + 2));
            b.find("#speak1").attr("id", "speak" + (i + 2));
            b.find("#vote1").attr("id", "vote" + (i + 2));
            $("main").append(a, b);
        }
    }
    //返回与法官日志按钮
    $(".return").click(function () {
        window.location.href = '../html/task13_2.html';
        sessionStorage.clear();
    });
    $("#diary").click(function () {
        window.location.href = '../html/task13_2.html';
    });

    //4个步骤的状态机
    var fsm = new StateMachine({
        init: "ready",
        transitions: [
            {name: 'stepOne', from: 'ready', to: 'stepOne'},
            {name: 'stepTwo', from: 'stepOne', to: 'stepTwo'},
            {name: 'stepThree', from: 'stepTwo', to: 'stepThree'},
            {name: 'stepFour', from: 'stepThree', to: 'stepFour'},
        ],
        methods: {
            onStepOne: function () {
                $(killing).css("background", "#83b09a");//改变步骤颜色
                $(killing).addClass("change");         //改变伪元素三角形颜色
            },
            onStepTwo: function () {
                $(words).css("background", "#83b09a");
                $(words).addClass("change");
            },
            onStepThree: function () {
                $(speak).css("background", "#83b09a");
                $(speak).addClass("change");
            },
            onStepFour: function () {
                $(vote).css("background", "#83b09a");
                $(vote).addClass("change");
            }
        }
    });

    //4个步骤，每次操作保存当前的状态
    $(killing).click(function () {
        if (fsm.state === "ready") {
            fsm.stepOne();
            window.location.href = '../html/kill-vote.html';
            sessionStorage.setItem("state", fsm.state);
        }
        else {
            confirm("请进行下一项活动");
        }
    });
    $(words).click(function () {
        if (fsm.state === "stepOne") {
            let result = confirm("请死者亮明身份并且发表遗言");
            if (result === true) {
                fsm.stepTwo();
                sessionStorage.setItem("state", fsm.state);
            }
        }
        else if (fsm.state === "stepTwo" || fsm.state === "stepThree") {
            confirm("请进行下一项活动")
        }
        else {
            confirm("请按顺序操作");
        }
        console.log(fsm.state, fsm.transitions());
    });
    $(speak).click(function () {
        if (fsm.state === "stepTwo") {
            let result = confirm("请玩家依次发言");
            if (result === true) {
                fsm.stepThree();
                sessionStorage.setItem("state", fsm.state);
            }
        }
        else if (fsm.state === "stepThree") {
            confirm("请进行下一项活动")
        }
        else {
            confirm("请按顺序操作");
        }
        console.log(fsm.state, fsm.transitions());
    });
    $(vote).click(function () {
        if (fsm.state === "stepThree") {
            fsm.stepFour();
            window.location.href = '../html/vote.html';
            sessionStorage.setItem("state", fsm.state);
        }
        else if (fsm.state === "stepFour") {
            confirm("请进行下一项活动")
        }
        else {
            confirm("请按顺序操作");
        }
    });

    //生成文字，状态机每次重新跳转页面都会重置为ready，
    // 所以每次跳转的时候给它重新转换成当前本地保存的状态
    if (state === "stepOne") {
        fsm.stepOne();
        for (let i = 0; i < day; i++) {
            let item = "#item" + (i + 1) + " p";   //获取item div下的 P 元素
            $(item).eq(0).text(aBeKilled[i].id + "号被杀手杀死,身份是" + aBeKilled[i].name);
        }
        for (let i = 0; i < (day - 1); i++) {
            let item = "#item" + (i + 1) + " p";
            $(item).eq(1).text(aVoted[i].id + "号被投死,身份是" + aVoted[i].name);
        }
    }
    if (state === "stepTwo") {
        fsm.stepOne();
        fsm.stepTwo();
    }
    if (state === "stepThree") {
        fsm.stepOne();
        fsm.stepTwo();
        fsm.stepThree();
    }
    if (state === "stepFour") {
        for (let i = 0; i < (day - 1); i++) {
            let item = "#item" + (i + 1) + " p";
            $(item).eq(0).text(aBeKilled[i].id + "号被杀手杀死,身份是" + aBeKilled[i].name);
            $(item).eq(1).text(aVoted[i].id + "号被全民投死,身份是" + aVoted[i].name);
        }
    }
    //toggle()点击天数隐藏/显示内容
    $(".day").click(function () {
        $(this).next(".item").slideToggle(500);
    });
});