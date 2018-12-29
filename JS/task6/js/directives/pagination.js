//分页
app.directive("myPagination",function ($http,$stateParams,$state) {
    return{
        restrict:"ACE",
        replace:true,
        templateUrl:"../html/paging.html",
        link:function (scope, element, attrs) {
            scope.totalItems = 999; //初始分页数据的总条数
            scope.maxSize = 10;
            scope.pageSize = "5";
            $http({
                method: 'get',
                url: "/abc/a/article/search",
                params: {
                    size: scope.pageSize,
                    page: $stateParams.page,
                    type: $stateParams.type,
                    status: $stateParams.status,
                    startAt: $stateParams.startAt,
                    endAt: $stateParams.endAt
                }
            }).then(function (response) {
                if (response.data.code === 0) {
                    console.log(response);
                    scope.articleList = response.data.data.articleList;
                    scope.totalItems = response.data.data.total;
                }
            });
            //当面分页与url参数保持一致
            scope.currentPage = ($stateParams.page === undefined) ? 1 : $stateParams.page;

            //点击分页按钮时跳转
            scope.page = function () {
                $state.go("navBar.article", {page: scope.currentPage}, {reload: true});
                console.log(scope.currentPage);
            };
        }
    }
});
//