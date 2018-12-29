angular.module('myApp').controller("detailsCtrl", function ($scope, $http, $state, $stateParams) {
    //判断cookies
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
    //判断是否为编辑状态,true则渲染页面数据
    if ($stateParams.id) {
        $http({
            method: "get",
            url: " /abc/a/article/" + $stateParams.id,
        }).then(function (response) {
            if (response.data.code === 0) {
                var article = response.data.data.article;
                $scope.imgUrl = article.img;
                $scope.title = article.title;
                $scope.type1 = article.type.toString();
                $scope.industry1 = article.industry.toString();
                $scope.explain = article.content;
                $scope.url = article.url;
                $scope.imgSrc = article.img;
            }
        })
    }
    $scope.type1 = "";
    $scope.industry1 = "";
    // $scope.$watch('type1',function(){
    //     //     $scope.show = ($scope.type1 == "3") ? true : false;
    //     // });
    $scope.type =
        [
            {"id": "", name: "请选择",},
            {"id": "0", name: "首页banner",},
            {"id": "1", name: "找职位banner",},
            {"id": "2", name: "找精英banner",},
            {"id": "3", name: "行业大图"}
        ];

    $scope.industry =
        [
            {id: "", name: "请选择",},
            {id: "0", name: "移动互联网",},
            {id: "1", name: "电子商务",},
            {id: "2", name: "企业服务",},
            {id: "3", name: "O2O"},
            {id: "4", name: "教育"},
            {id: "5", name: "金融"},
            {id: "6", name: "游戏"}

        ];
    $scope.btnGroup =
        [
            {id: 2, btnName: "立即上线",},
            {id: 1, btnName: "存为草稿",},
        ];
    //上线和存为草稿
    $scope.line = function () {
        $scope.currentID = this.x.id;
        if ($stateParams.id) {
            $http({
                method: "PUT",
                url: "/abc/a/u/article/" + $stateParams.id,
                data: $.param({
                    title: $scope.title,
                    status: $scope.currentID,
                    img: $scope.imgUrl,
                    content: $scope.explain,
                    url: $scope.url,
                    type: $scope.type1,
                    industry: $scope.industry1,
                    createAt: Number(new Date())
                }),
                headers: {'Content-Type': "application/x-www-form-urlencoded"},
            }).then(function (response) {
                if (response.data.code === 0) {
                    console.log(response);
                    $state.go("navBar.article", {reload: true});
                    bootbox.alert({
                        title: "提示",
                        message: "编辑成功",
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
        else {
            $http({
                method: "post",
                url: "/abc/a/u/article",
                params: {
                    title: $scope.title,
                    status: $scope.currentID,
                    img: $scope.imgUrl,
                    content: $scope.explain,
                    url: $scope.url,
                    type: $scope.type1,
                    industry: $scope.industry1,
                    createAt: Number(new Date())
                },
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function (response) {
                if (response.data.code === 0) {
                    console.log(response);
                    $state.go("navBar.article", {reload: true});
                    bootbox.alert({
                        title: "提示",
                        message: "新增成功",
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
    };

    //更改工具栏图标
    window.UEDITOR_CONFIG.toolbars = [
        ['fullscreen', 'source', 'undo', 'redo', 'bold', 'italic',
            'underline', 'fontborder', 'backcolor', 'fontsize', 'fontfamily',
            'justifyleft', 'justifyright', 'justifycenter', 'justifyjustify',
            'strikethrough', 'superscript', 'subscript', 'removeformat',
            'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|',
            'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist',
            'selectall', 'cleardoc', 'link', 'unlink', 'emotion', 'help']
    ];
    //编辑器,具体配置在ueditor.config.js找
    window.UEDITOR_CONFIG.initialFrameWidth = "100%";//初始化宽度100%，实现自适应屏幕
    window.UEDITOR_CONFIG.elementPathEnabled=false;//取消获取元素标签
    window.UEDITOR_CONFIG.maximumWords=1000;//字数限制
    window.UEDITOR_CONFIG.enableAutoSave=false;//关闭自动保存
});
