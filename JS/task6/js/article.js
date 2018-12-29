angular.module('myApp').controller("myCtrl", function ($scope, $http, $state, $stateParams) {
    //判断cookies是否有值
    var CookieUtill = {
        get: function (name) {
            var cookieName = encodeURIComponent(name) + "=",
                cookieStart = document.cookie.indexOf(cookieName),
                cookieValue = null;
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
            }
            return cookieValue;
        }
    }
    var cookies=CookieUtill.get("user");
    if (cookies==null){
        $state.go("login")
    }
    //判断cookies结束
    $scope.search = function () {
        $state.go("navBar.article",
            {
                type: $scope.type.id,
                status: $scope.status.id,
                //getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。
                startAt: isNaN($scope.date1.toString()) ? Number($scope.date1) : $scope.date1,
                endAt: isNaN($scope.date2.toString()) ? Number($scope.date2) + 86399999 : $scope.date2,
                page: 1 //搜索时重置页面为第一页
            }, {reload: true});
        console.log($scope.type.id, $scope.status.id);
    };
    //搜索框文字和url参数保持一致
    $scope.type = {
        id: ($stateParams.type === undefined) ? "" : $stateParams.type
    };
    $scope.status = {
        id: ($stateParams.status === undefined) ? "" : $stateParams.status
    };

    //清空跳转
    $scope.clear = function () {
        $state.go("navBar.article", {
            page: 1,
            type: "",
            status: "",
            startAt: "",
            endAt: ""
        })
    };
    //下拉框选项，用ng-options生成
    $scope.searchType =
        [
            {id: "", name: "全部",},
            {id: "0", name: "首页banner",},
            {id: "1", name: "找职位banner",},
            {id: "2", name: "找精英banner",},
            {id: "3", name: "行业大图"}
        ];
    $scope.searchState =
        [
            {id: "", name: "全部",},
            {id: "1", name: "草稿",},
            {id: "2", name: "上线"},
        ];

    //模态框
    //上下线
    $scope.open = function () {
        //当前操作的状态数和id
        $scope.currentStatus = this.x.status;
        $scope.currentId = this.x.id;
        switch ($scope.currentStatus) {
            case 1:
                $scope.operationTips1 = "上线后该图片将在轮播banner中展示。";
                $scope.operationTips2 = "是否执行上线操作？";
                break;
            case 2:
                $scope.operationTips1 = "下线后该图片将不展示站轮播banner中。";
                $scope.operationTips2 = "是否执行下线操作？";
                break;
        }
        bootbox.confirm({
            title: "操作提示",
            message: "<span class='fc-99 f16'>" + $scope.operationTips1 + "</span>" + "<br>" + "<span class='f20'>" + $scope.operationTips2 + "</span>",
            buttons: {
                cancel: {
                    label: '取消',
                    className: 'btn btn-warning'
                },
                confirm: {
                    label: '确定',
                    className: 'btn btn-primary'
                },
            },
            callback: function (result) {
                if (result) {
                    $http({
                        method: 'put',
                        url: "/abc/a/u/article/status",
                        params: {
                            status: ($scope.currentStatus === 1) ? 2 : 1,
                            id: $scope.currentId,
                        }
                    }).then(function (response) {
                        if (response.data.code === 0) {
                            console.log(response);
                            $scope.page();
                            bootbox.alert({
                                title: "提示",
                                message: ($scope.currentStatus === 1) ? "上线成功" : "下线成功",
                                button: {
                                    confirm: {
                                        label: '确定',
                                        className: 'btn btn-primary'
                                    }
                                }
                            })
                        }
                    });
                }
            }
        });
    };
    //删除
    $scope.remove = function () {
        //当前操作的状态数和id
        $scope.currentStatus = this.x.status;
        $scope.currentId = this.x.id;
        bootbox.confirm({
            title: "操作提示",
            message: "是否确认删除",
            buttons: {
                confirm: {
                    label: "确定",
                    className: 'btn btn-primary'
                },
                cancel: {
                    label: "取消",
                    className: 'btn btn-warning'
                }
            },
            callback: function (result) {
                if (result) {
                    $http({
                        method: "delete",
                        url: "/abc/a/u/article/" + $scope.currentId,
                    }).then(function (response) {
                        if (response.data.code === 0) {
                            $scope.page();
                            bootbox.alert({
                                title: "提示",
                                message: "删除成功",
                                button: {
                                    confirm: {
                                        label: '确定',
                                        className: 'btn btn-primary'
                                    }
                                }
                            })
                        }
                    })
                }
            }
        })
    };
    //编辑
    $scope.edit = function () {
        $scope.currentId = this.x.id;
        $state.go("navBar.page2", {id: $scope.currentId});

    }
});



