//获取指定key的cookies值
app.service('MyService', function () {
    this.getcookies = function (name) {
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
    };
});
//相同的使用工厂方法
// app.factory("MyFactory",function () {
//     return {
//         getcookies: function (name) {
//             var cookieName = encodeURIComponent(name) + "=",
//                 cookieStart = document.cookie.indexOf(cookieName),
//                 cookieValue = null;
//             if (cookieStart > -1) {
//                 var cookieEnd = document.cookie.indexOf(";", cookieStart);
//                 if (cookieEnd == -1) {
//                     cookieEnd = document.cookie.length;
//                 }
//                 cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
//             }
//             return cookieValue;
//         }
//     }
// })
