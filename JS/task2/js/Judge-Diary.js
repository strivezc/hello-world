var aBeKilled = JSON.parse(sessionStorage.getItem('aBeKilled')),//被杀玩家
    aVoted = JSON.parse(sessionStorage.getItem('aBeVoted')),//被投玩家
    num = JSON.parse(sessionStorage.getItem("days"));//天数传递


console.log(aBeKilled);
console.log(aVoted);

$(document).ready(function () {
    if (num) {
        day = num;//保存的时间
    }
    else {
        day = 1;//初始的时间
    }

    var killing = "#killing" + (day),//选择动态killing的id
        words = "#words" + (day),
        speak = "#speak" + (day),
        vote = "#vote" + (day);
    console.log(killing, words, speak, vote);
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
    console.log(day);
    //返回按钮
    $(".return").click(function () {
        window.location.href = '../html/task13_2.html';
       sessionStorage.clear();
    });


    //状态机
    var fsm = new StateMachine({
        init: "ready",
        transitions: [
            {name: 'stepOne', from: 'ready', to: 'stepOne'},
            {name: 'stepTwo', from: 'stepOne', to: 'stepTwo'},
            {name: 'stepThree', from: 'stepTwo', to: 'stepThree'},
            {name: 'stepFour', from: 'stepThree', to: 'stepFour'},
            {name: 'stepFive', from: 'ready', to: 'ready'}
        ],
    });
    //4个步骤
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
            let result= confirm("请死者亮明身份并且发表遗言");
            if (result===true) {
                fsm.stepTwo();
            $(words).css("background", "#83b09a");}
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
            let result=confirm("请玩家依次发言");
            if (result===true) {
                fsm.stepThree();
                $(speak).css("background", "#83b09a");}
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
            $(vote).css("background", "#83b09a");
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

    var state = sessionStorage.getItem("state");

    //生成文字
    if (state === "stepOne") {
        fsm.stepOne();
        $(killing).css("background", "#83b09a");
        for (let i=0;i<day;i++){
        let item="#item" + (i+1)+" p";   //获取item div下的 P 元素
        $(item).eq(0).text(aBeKilled[i].id + "号被杀手杀死,身份是" + aBeKilled[i].name);
    }
        for (let i=0;i<(day-1);i++){
            let item="#item" + (i+1)+" p";
            $(item).eq(1).text(aVoted[i].id + "号被投死,身份是" + aVoted[i].name);
        }
    }
    if (state === "stepFour") {
        for (let i=0;i<(day-1);i++){
            let item="#item" + (i+1)+" p";
            $(item).eq(0).text(aBeKilled[i].id + "号被杀手杀死,身份是" + aBeKilled[i].name);
            $(item).eq(1).text(aVoted[i].id + "号被投死,身份是" + aVoted[i].name);
        }
    }
    //toggle()点击天数隐藏/显示内容
    $(".day").click(function(){
        $(this).next(".item").slideToggle(500);
    });
});