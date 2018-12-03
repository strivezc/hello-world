var number = document.getElementById("number"),
    myRange = document.getElementById("myRange"),
    plus = document.getElementById("plus"),
    reduce = document.getElementById("reduce"),
    start = document.getElementById("start"),
    oRoleKillers = {
        id: 0,
        name: "杀手",
        state: "存活",
        day: 0,
    },
    oRolePeople = {
        id: 0,
        name: "平民",
        state: "存活",
        day: 0,
    },
    aKillers = [],
    aPeople = [],
    allRole = [];


//判断人数配比
function distribution() {
    var killer;
    var people;
    aKillers = [];//每次新建玩家数组的时候清空前一次
    aPeople = [];
    if (number.value >= 4 && number.value < 6) {
        killer = 1;
        people = number.value - killer;
    }
    else if (number.value >= 6 && number.value < 9) {
        killer = 2;
        people = number.value - killer;
    }
    else if (number.value >= 9 && number.value < 11) {
        killer = 3;
        people = number.value - killer;
    }
    else if (number.value >= 11 && number.value < 16) {
        killer = 4;
        people = number.value - killer;
    }
    else {
        killer = 5;
        people = number.value - killer;
    }
    for (i = 0; i < killer; i++) {
        var newORoleKillers = JSON.parse(JSON.stringify(oRoleKillers));//JSON对象序列化方法克隆对象
        aKillers.push(newORoleKillers);
    }
    for (i = 0; i < people; i++) {
        var newORolePeople = JSON.parse(JSON.stringify(oRolePeople));//JSON对象序列化方法克隆对象
        aPeople.push(newORolePeople);
    }
    return allRole = aKillers.concat(aPeople);

}


//洗牌
function shuffle() {
    var a;
    for (var i = allRole.length; i--;) {
        var random = Math.floor(Math.random() * (i + 1));
        var temp = allRole[i];
        allRole[i] = allRole[random];
        allRole[random] = temp;
    }
    for (var b = 0; b < allRole.length; b++) {
        a = b;
        allRole[a].id = a + 1;
    }
    sessionStorage.setItem('role', JSON.stringify(allRole));
    console.log(allRole);
}


//正则表达式数字验证
function regExp() {
    var reg = /^[4-9]$|^1[0-8]$/g;
    return reg.test(number.value);
}

//数字框与滑块联动
number.onchange = function () {
    if (regExp()) {
        myRange.value = number.value;
    }
    else {
        alert("请输入正确范围（4-18）");
        myRange.value = number.value = 4;
    }
    distribution();
    shuffle();
};


//滑块与数字框联动
myRange.onchange = function () {
    number.value = myRange.value;
    distribution();
    shuffle();

};
//加减按钮分别与数字框滑块联动
reduce.onclick = function () {
    myRange.value = --myRange.value;
    number.value = myRange.value;
    distribution();
    shuffle();
};
plus.onclick = function () {
    myRange.value = ++myRange.value;
    number.value = myRange.value;
    distribution();
    shuffle();
};

start.onclick = function () {
    window.location.href = '../html/identity.html';
};
distribution();
shuffle();








/* 洗牌操作
方法一
var test = ["苹果", "香蕉", "榴莲", "雪梨", "水蜜桃", "西瓜", "橙子"];
function aTest() {
    var tLength = test.length;
    for (var i = tLength;i--;) {
        var random = Math.floor(Math.random() * (i+1));
        var temp = test[i];
        test[i] = test[random];
        test[random] = temp;
    }
    return test;
}
console.log(aTest());

方法二
function bTest() {
    var lenght=test.length;
    var newA= [];
    for(i=0;i<lenght;i++){
        var a=Math.floor(Math.random()*test.length);
        newA.push(test[a]);
        test.splice(a,1);
    }
    return newA;
}
console.log(bTest());*/
