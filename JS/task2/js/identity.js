var btn1 = $(".btn1"); //正面按钮元素
var btn2 = $(".btn2"); //背面按钮元素
var identity = $("#role"); //身份词元素
var number = $(".number"); //玩家序号元素
var num = 0;         //定义初始数组序号
var aRole = JSON.parse(sessionStorage.getItem('role')); //页面的数组传递
console.log(aRole);

$(function () {
    //返回上一页
    $("#return").click(function () {
        window.location.href = '../html/player-distribution.html';
    })
    //查看身份按钮
    $(".btn1").click(function () {
        $(".card1").css("display", "block");//背面卡片显示
        identity.text("角色：" + aRole[num]);//角色名字
        $(".card2").css("display", "none");//正面卡片隐藏
        btn1.css("display", "none");       //正面按钮隐藏
        btn2.css("display", "block");      //背面按钮显示
        if (number.text() < aRole.length) {
            btn2.text("隐藏并传递给" + (num + 2) + "号");
        }
        else {
            btn2.text("法官查看")
        }//序号大于人数时背面按钮显示法官查看
        num++; //初始数组序号每点击一次自增 1
        console.log(identity.text());
    })

    //隐藏身份按钮
    $(".btn2").click(function () {
        if (btn2.text() === "法官查看") {
            window.location.href = '../html/task13_2.html';
        }//当背面按钮内容为法官查看点击事件为跳转到下一页，否则执行下面的内容
        else {
            number.text(num + 1);
            $(".card1").css("display", "none");
            $(".card2").css("display", "block");
            btn1.css("display", "block");
            btn2.css("display", "none");
            btn1.text("查看" + (num + 1) + "号身份");
        }
    })
});