angular.module("loadingSpin", [])
    .directive("loadingSpin", function() {
        return {

            restrict: "EA",

            replace: true,

            templateUrl: "app/search/loadingSpin/loadingSpinView.html"
        }
    });
