var btn1 = $(".btn1");
var btn2 = $(".btn2");
var number = $(".number");
var role = JSON.parse(sessionStorage.getItem('role'));
console.log(role);
$(function () {
    //返回上一页
    $("#return").click(function () {
        window.location.href = '../html/player-distribution.html';
    })
    //查看身份按钮事件
    $(".btn1").click(function () {
        btn1 = $(".btn1");
        btn2 = $(".btn2");
        //鼠标点击次数
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 2;
        }
        $(".card1").css("display", "block");
        $("#role").text("角色：" + role[(Number(sessionStorage.clickcount) - 2)]);
        $(".card2").css("display", "none");
        btn1.css("display", "none");
        btn2.css("display", "block");
        if (number.text() < role.length) {
            btn2.text("隐藏并传递给" + sessionStorage.clickcount + "号");
        }
        else {
            btn2.text("法官查看")
        }
        console.log($("#role").text());
    })

    //隐藏身份按钮事件
    $(".btn2").click(function () {
        btn1 = $(".btn1");
        btn2 = $(".btn2");
        number = $(".number");
        if (btn2.text() === "法官查看") {
            window.location.href = '../html/task13_2.html';
        }
        else {
            number.text(sessionStorage.clickcount);
            $(".card1").css("display", "none");
            $(".card2").css("display", "block");
            btn1.css("display", "block");
            btn2.css("display", "none");
            btn1.text("查看" + sessionStorage.clickcount + "号身份");
        }

    })
});