//日历
app.directive("myCalendar",function ($stateParams) {
    return {
        restrict: "ACE",
        replace: true,
        templateUrl: "../html/calendar.html",
        link:function (scope) {
            scope.today = new Date();//变量今天
            //输入框的url保持一致 ，后台传的时间戳是string格式，转为number格式，再转成Date对象
            scope.date1 = ($stateParams.startAt === undefined) ? "" :
                new Date(Number($stateParams.startAt));

            scope.date2 = ($stateParams.endAt === undefined) ? "" :
                new Date(Number($stateParams.endAt - 86399999));

            scope.format = "yyyy-MM-dd";
            scope.altInputFormats = ['yyyy-M!-d!'];
            scope.popup1 = {opened: false};
            scope.popup2 = {opened: false};
            scope.open1 = function () {
                scope.popup1.opened = true;
            };
            scope.open2 = function () {
                scope.popup2.opened = true;
            };
        }
    }
});