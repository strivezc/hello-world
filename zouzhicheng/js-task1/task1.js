var time;
var aNewBlock = [];
var aGrid = document.getElementsByClassName("grid");
var oButton1 = document.getElementById("btn1");
var oButton2 = document.getElementById("btn2");

//重置颜色
function reset() {
    for (i = 0; i < 9; i++) {
        aGrid[i].style.backgroundColor = "orange";
    }
}

//随机颜色
function color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//随机数
function random() {
    var aBlocks = [];
    var runNum = 3;
    aNewBlock = [];
    for (i = 0; i < aGrid.length; i++) {
        aBlocks.push(i);
    }
    for (i = 0; i < runNum; i++) {
        var ran = Math.floor(Math.random() * (aBlocks.length));
        aNewBlock.push(aBlocks[ran]);
        aBlocks.splice(ran, 1);
    }
}

//循环
function begin() {
    random();
    reset();
    aGrid[aNewBlock[0]].style.background = color();
    aGrid[aNewBlock[1]].style.background = color();
    aGrid[aNewBlock[2]].style.background = color();
}

//按钮事件
oButton1.onclick = function () {
    clearInterval(time);
    time = setInterval(
        begin, 1000);
}
oButton2.onclick = function () {
    clearInterval(time);
    reset();
}
