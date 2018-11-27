var role = JSON.parse(sessionStorage.getItem('role'));
console.log(role);
$(document).ready(function () {
    $(".menuButton").click(function () {
        window.location.href = '../html/player-distribution.html';
    })
    for (var i = 0; i < role.length; i++) {
        var display = "<div class=\"role\">\n" +
            "<div class=\"diving\">\n" +
            "<div class=\"name tc\">" + role[i] + "</div>\n" +
            "<div class=\"number tc white-color\">" + (i + 1) + "</div>\n" +
            "</div>\n" +
            "<div class=\"operation\">\n" +
            "<button class=\" killButton bcg-white\"></button>\n" +
            "</div>\n" +
            "</div>";
        $(".li").append(display);
    }
});
