angular.module("newsDirective", ["newsModule"])
    .directive("newsDirective", function() {

        return {
            /*link: function(scope, element, attrs) {

            },*/
            templateUrl: "app/news/newsView.html"
        }
    });