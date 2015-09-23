angular.module("breadcrumb", [])
    .directive("breadcrumbView", function() {
        return {

            restrict: "EA",

            replace: true,

            templateUrl: "app/search/breadcrumb/breadcrumbView.html"
        }
    });
