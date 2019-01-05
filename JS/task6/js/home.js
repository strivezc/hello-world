angular.module('myApp').controller("homeCtrl", function ($scope, $state, $http,MyService) {
   //判断cookies
    if (MyService.getcookies("user")==null){$state.go("login")}
    //退出
    $scope.close = function () {
        $http({
            url: "/abc/a/logout",
            method: "POST",
        }).then(function () {
            $state.go("login");
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            //没有直接删除已有cookie的方法，所以再设置一次相同的cookie，并将失效时间设置为过去的时间
            sessionStorage.removeItem("nav");//删除导航栏保存的值
        });
    };
    //导航栏
    $scope.nav =
        [
            {
                first: "后台管理",
                state: false,
                highlightReset: false,
                second: [
                    {name: "模块管理", url: "", state: false,},
                    {name: "角色管理", url: "", state: false,},
                    {name: "密码修改", url: "", state: false,},
                    {name: "账户管理", url: "", state: false,}
                ]
            },
            {
                first: "信息管理",
                state: false,
                second: [
                    {name: "公司列表", url: "", state: false,},
                    {name: "职位列表", url: "", state: false,},
                ]
            },
            {
                first: "内容管理",
                state: false,
                second: [
                    {name: "Article列表", url: "navBar.article", state: false,},
                ]
            }
        ];
    //一级菜单点击
    $scope.first = function () {
        // (this.show===false) ? this.show = true : this.show = false;
        if (this.x.state === false) {
            //先将全部重置为没有选中状态.实现点击这一个，另一个收回侧边栏
            angular.forEach($scope.nav, function (x) {
                x.state = false
            });
            //将此选项状态改为选中
            this.x.state = true;
        }
        else {
            //将此选项状态改为没有选中
            this.x.state = false
        }
        this.x.highlightReset = false;
    };
    //二级菜单点击
    $scope.second = function () {
        angular.forEach($scope.nav, function (x) {
            x.highlightReset = false;
            angular.forEach(x.second, function (y) {
                y.state = false
            })
        });
        this.y.state = true;
        this.x.highlightReset = true;
        sessionStorage.setItem("nav", JSON.stringify($scope.nav))//保存当前数组即保存当前高亮的状态
    };
    if (JSON.parse(sessionStorage.getItem("nav")) != null) {
        $scope.nav = JSON.parse(sessionStorage.getItem("nav"))
    }//刷新页面时获取保存的数组使高亮保持一致
});
