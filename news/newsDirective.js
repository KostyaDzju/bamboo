angular.module("newsDirective", ["newsModule"])
    .directive("newsDirective", function() {

        return {
            templateUrl: "news/newsView.html"
        }
    });