var number = document.getElementById("number"),//数字框
    myRange = document.getElementById("myRange"),//滑块
    plus = document.getElementById("plus"),// + 号
    reduce = document.getElementById("reduce"),//- 号
    start = document.getElementById("start"),//开始游戏按钮
    numPeople = document.getElementsByClassName("people"),//平民数量
    numKiller = document.getElementsByClassName("killer"),//杀手数量
    oRoleKillers = new Person(0, "杀手", "存活", 0),
    oRolePeople = new Person(0, "平民", "存活", 0),
    aKillers = [],//杀手数组
    aPeople = [],//平民数组
    allRole = [];//全部玩家

function Person(id, name, state, day) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.day = day;
}

//判断游戏人数配比
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
    numPeople[0].innerHTML = " 平 民 " + aPeople.length + " 人";
    numKiller[0].innerHTML = " 杀 手 " + aKillers.length + " 人";
    return allRole = aKillers.concat(aPeople);
}

function shuffle() {
    //洗牌
    var a;
    for (var i = allRole.length; i--;) {
        var random = Math.floor(Math.random() * (i + 1));
        var temp = allRole[i];
        allRole[i] = allRole[random];
        allRole[random] = temp;
    }
    //洗牌后给角色添加序号
    for (var b = 0; b < allRole.length; b++) {
        a = b;
        allRole[a].id = a + 1;
    }
    sessionStorage.setItem('role', JSON.stringify(allRole));
    console.log(allRole);
}

//正则表达式数字验证 4-18
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
(function () {
    distribution();
    shuffle();
}());


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
