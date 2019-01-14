/*JS请求
btn=document.getElementById("btn");
btn.onclick = function () {
    var userName=document.getElementById("username").value,
        passWord=document.getElementById("password").value,
        text=document.getElementsByClassName("text-alert")[0];
        url="/abc/a/login?name="+ userName+ "&pwd=" + passWord;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var response=JSON.parse(xhr.responseText);
            console.log(response);
        if (response.code==0){
            window.location.href="http://dev.admin.carrots.ptteng.com/#/dashboard";
        }
        else if (response.code=="-5003") {
            text.innerHTML="用户不存在";
        }
        else if(response.code=="-5004"){
            text.innerHTML="密码错误";
        }
        }
    };
    xhr.open("POST",url,true);
    xhr.send();
    return false;
};
*/
//JQ请求
// $(function () {
//    $("#btn").click(function () {
//        var userName=$("#username").val(),
//            passWord=$("#password").val(),
//            text=$(".text-alert"),
//            dataPost={
//            "name":userName,
//            "pwd":passWord
//            };
//        $.ajax({
//            url: "/abc/a/login",
//            type:"post",
//            data:dataPost,
//            success:function (result) {
//                var response=JSON.parse(result);
//                if (response.code==0){
//                    window.location.href="http://dev.admin.carrots.ptteng.com/#/dashboard";
//                }
//                else if (response.code=="-5003") {
//                    text.text("用户不存在");
//                }
//                else if(response.code=="-5004"){
//                    text.text("密码错误");
//                }
//            }
//
//        });
//        return false;
//    })
// });
angular.module('myApp').controller("loginCtrl", function ($state, $scope, $http, $log,$timeout) {
    $scope.login = function () {
        var userName = $scope.userName,
            pwd = $scope.pwd;
        $http({
            url: "/abc/a/login",
            method: "POST",
            data: $.param({
                "name": userName,
                "pwd": pwd
            }),
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }).then(function successCallback(response) {
            $log.info(response);
            if (response.data.message == "success") {
               var name= response.data.data.manager.name;
                document.cookie="user"+"="+name;
                console.log(name);
                $state.go("navBar.welcome")
            }
            if (response.data.code == "-5003") {
                $scope.myText="用户不存在";
                $timeout(function (){$scope.myText=""},2500)
            }
            if (response.data.code == "-5004") {
                $scope.myText="密码错误";
                $timeout(function (){$scope.myText=""},2500)
            }
        });
    }
});


