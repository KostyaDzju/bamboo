angular.module("loginDirective", ["loginModule"])
    .directive("loginDirective", function() {

        return {
            templateUrl: "app/login/loginView.html"
        }
    });