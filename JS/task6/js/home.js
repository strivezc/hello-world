angular.module('myApp').controller("homeCtrl", function ($scope, $state, $http) {
    $scope.close = function () {
        $http({
            url: "/abc/a/logout",
            method: "POST",
        }).then(function () {
            $state.go("login");
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            //没有直接删除已有cookie的方法，所以再设置一次相同的cookie，并将失效时间设置为过去的时间
        })
    }
});
