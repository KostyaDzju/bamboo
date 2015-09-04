angular.module("app",["ngRoute", "loginDirective", "newsDirective"])

    .config(function($routeProvider) {

        $routeProvider.when("/login", {
            templateUrl: "/firstBamboo/login/loginViewDirective.html"
        });

        $routeProvider.when("/news", {
            templateUrl: "/firstBamboo/news/newsViewDirective.html"
        });
        $routeProvider.otherwise({
            redirectTo: "/login"
        });
    })
    .controller("mainCtrl", function($scope, $http, $location, $log) {

    });