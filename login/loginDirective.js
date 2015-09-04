angular.module("loginDirective", ["loginModule"])
    .directive("loginDirective", function() {

        return {
            templateUrl: "login/loginView.html"
        }
    });