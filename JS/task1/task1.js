//获取盒子的节点
var grid=document.getElementsByClassName("grid");
//定义定时器time变量
var time;
//每次循环重置颜色和生成随机数，并改变随机格子的颜色
function begin() {
    for(i=0;i<9;i++){
        grid[i].style.backgroundColor="orange";
    }
    var blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newBlock =  [];
    var runNum = 3;
    for (i = 0; i < runNum; i++) {
        var ran = Math.floor(Math.random() * (blocks.length));
        newBlock.push(blocks[ran]);
        blocks.splice(ran, 1);
    }
    grid[newBlock[0]].style.background=color();
    grid[newBlock[1]].style.background=color();
    grid[newBlock[2]].style.background=color();
}
//用rgb颜色值生成随机颜色
function color() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" +r + "," + g + "," + b + ")";
}
//按钮事件
function start() {
    clearInterval(time);
    time=setInterval(
        begin ,1000);
}
function stop() {
    clearInterval(time);
    for(i=0;i<9;i++){
        grid[i].style.backgroundColor="orange";
    }
}