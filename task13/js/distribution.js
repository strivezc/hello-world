var number = document.getElementById("number");
var myRange = document.getElementById("myRange");
var killer = document.getElementById("killer");
var people = document.getElementById("people");
var plus = document.getElementById("plus");
var reduce = document.getElementById("reduce");
var roleKllers = "杀手";
var rolePeople = "平民";
var aKillers = [];
var aPeople = [];
var allRole=aKillers.concat(aPeople);

//创建玩家角色数组：
function aPlayer() {
    aKillers = [];
    aPeople = [];
    for (var i = 0; i < killer.innerText; i++) {
        aKillers.push(roleKllers);
    }
    for (i = 0; i < people.innerText; i++) {
        aPeople.push(rolePeople);
    }
    allRole=aKillers.concat(aPeople);
    console.log(allRole);
}
//洗牌
function shuffle() {
    for (var i = allRole.length; i--;) {
        var random = Math.floor(Math.random() * (i + 1));
        var temp = allRole[i];
        allRole[i] = allRole[random];
        allRole[random] = temp;
    }
    console.log(allRole);
}
//数字框与滑块联动
number.oninput = function () {
    aPlayer();
    shuffle();
    if (number.value >= 4 && number.value <= 18) {
        myRange.value = number.value;
        killer.innerText = Math.round((number.value) * 0.25);
        people.innerText = number.value - killer.innerText;
    }
    else {
        alert("请输入正确范围内的数字");
    }
}
//滑块与数字框联动
myRange.oninput = function () {
    aPlayer();
    shuffle();
    number.value = myRange.value;
    killer.innerText = Math.round((myRange.value) * 0.25);
    people.innerText = myRange.value - killer.innerText;

}
//加减按钮分别与数字框滑块联动
reduce.onclick = function () {
    aPlayer();
    shuffle();
    myRange.value = --myRange.value;
    number.value = myRange.value;
    killer.innerText = Math.round((number.value) * 0.25);
    people.innerText = number.value - killer.innerText;

}
plus.onclick = function () {
    aPlayer();
    shuffle();
    myRange.value = ++myRange.value;
    number.value = myRange.value;
    killer.innerText = Math.round((number.value) * 0.25);
    people.innerText = number.value - killer.innerText;
}


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
