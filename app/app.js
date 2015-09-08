angular.module("app",["ui.router", "loginDirective", "newsDirective"])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "/app/pages/loginViewDirective.html"
            })
            .state("news", {
                url: "/news",
                templateUrl: "/app/pages/newsViewDirective.html"
            });

    })
    .controller("mainCtrl", function($scope, $http, $location, $log) {

    });