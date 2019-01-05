//图片上传
app.directive("imgUpload", function ($http) {
    return {
        restrict: "ACE",
        replace: true,
        templateUrl: "../html/imgUpload.html",
        link: function (scope, element, attrs) {
            var oMyForm = new FormData(),
                fileInput = document.getElementById("file"),
                img = document.getElementById('img1');
            img.height = 200;
            scope.toggle = false;
            fileInput.onchange = function () {
                //获取图片文件
                scope.$apply(function () {
                    scope.toggle = true;//显示行内容
                    scope.files = fileInput.files;
                    scope.file = scope.files[0];
                    console.log(scope.files);
                    //添加文件进FormData
                    oMyForm.append("file", scope.file);
                    //验证文件是否为图片
                    if (!/image\/\w+/.test(scope.file.type)) {
                        alert("请上传图片！");
                        return false;
                    }
                });
            };
            //
            scope.upload = function () {
                $http({
                    method: 'post',
                    url: '/abc/a/u/img/task',
                    //跟踪上传文件进度
                    uploadEventHandlers: {
                        progress: function (e) {
                            console.log(e.loaded / e.total * 100);
                            scope.progress = Math.round((e.loaded / e.total) * 100) + "%";
                        }
                    },
                    data: oMyForm,
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(function (response) {
                    if (response.data.code === 0) {
                        console.log(response);
                        scope.imgUrl = response.data.data.url;
                        scope.imgSrc = scope.imgUrl;
                        scope.switch = true;//成功上传后禁用上传按钮
                    }

                });

            };
            //删除按钮
            scope.remove = function () {
                scope.toggle = false;//隐藏行
                scope.switch = false;//删除后启用按钮
                scope.progress = 0;//进度条清空
                scope.imgSrc = "";//图片地址清空
                oMyForm.delete("file");//清空FormData数据，delete方法内是键名"key"
                fileInput.value = "";//清空文件
            };
        }
    };
});



