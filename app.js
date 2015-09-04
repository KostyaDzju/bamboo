angular.module("app",["ui.router", "loginDirective", "newsDirective"])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "/firstBamboo/login/loginViewDirective.html"
            })
            .state("news", {
                url: "/news",
                templateUrl: "/firstBamboo/news/newsViewDirective.html"
            });

    })
    .controller("mainCtrl", function($scope, $http, $location, $log) {

    });