var grid=document.getElementsByClassName("grid");
function begin() {

        var blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var newBlock =  new Array();
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
function color() {
    var a=Math.floor(Math.random()*10);
    var b=Math.floor(Math.random()*10);
    var c=Math.floor(Math.random()*10);
    var d=Math.floor(Math.random()*10);
    var e=Math.floor(Math.random()*10);
    var f=Math.floor(Math.random()*10);
    var g="#"+a+b+c+d+e+f;
    return g;
}
function start() {
   
   time=setInterval(begin ,1000)
}
function stop() {
    clearInterval(time)
}