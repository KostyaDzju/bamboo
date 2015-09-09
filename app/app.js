angular.module("app",["ui.router", "loginDirective", "newsDirective"])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "/app/pages/loginView.html"
            })
            .state("news", {
                url: "/news",
                templateUrl: "/app/pages/newsViewDetails.html"
            });

    })
    .controller("mainCtrl", function($scope) {
    });