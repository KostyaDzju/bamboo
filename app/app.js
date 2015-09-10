angular.module("app",["ui.router", "loginDirective", "newsDirective", "toolbarDirective"])

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
            })
            .state("citations", {
                url: "/news",
                templateUrl: "/app/pages/citations.html"
            })
    })
    .controller("mainCtrl", function($scope) {
    });