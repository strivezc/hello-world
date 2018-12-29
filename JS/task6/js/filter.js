app.filter("statusChange", function () {
    return function (input) {
        var statusName = "";
        if (input == "1") {
            statusName = "草稿"
        }
        if (input == "2") {
            statusName = "上线"
        }
        return statusName;
    }
});
app.filter("OnlineOrOffline", function () {
    return function (input) {
        var statusName = "";
        if (input == "1") {
            statusName = "上线"
        }
        if (input == "2") {
            statusName = "下线"
        }
        return statusName;
    }
});
app.filter("typeChange", function () {
    return function (input) {
        var typeName = "";
        if (input == "0") {
            typeName = "首页banner"
        }
        if (input == "1") {
            typeName = "找职位banner"
        }
        if (input == "2") {
            typeName = "找精英banner"
        }
        if (input == "3") {
            typeName = "行业大图"
        }
        return typeName;
    }
});