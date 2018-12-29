var app = angular.module('myApp', ['ui.router', 'oc.lazyLoad', 'ngMessages', 'ui.bootstrap', 'ng.ueditor']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/navBar');
    $stateProvider
        .state("navBar", {
            url: "/navBar",
            templateUrl: "../html/nav-bar.html",
            resolve: {
                loadMyService: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../css/backstage.css');
                }]
            }
        })
        .state("navBar.article", {
            url: "/article?page&type&status&startAt&endAt",
            templateUrl: "../html/article.html",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        "../js/article.js",
                    ]);
                }]
            },
        })
        .state("navBar.page2", {
            url: "/page2?id",
            templateUrl: "../html/details.html",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        "../js/details.js",
                        "../js/directives/imgUpload.js"
                    ]);
                }]
            },
            controller: "detailsCtrl"
        })
        .state('navBar.welcome', {
            url: '/welcome',
            templateUrl: '../html/welcome.html',
        })
        .state('login', {
            url: '/login',
            templateUrl: "../html/login.html",
            controller: 'loginCtrl',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('../js/login.js');
                }]
            }
        });
})


