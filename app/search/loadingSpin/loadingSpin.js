angular.module("loadingSpin", [])
    .directive("loadingSpin", function() {
        return {

            restrict: "EA",

            scope: {
                myState: "="
            },

            replace: true,

            templateUrl: "app/search/loadingSpin/loadingSpinView.html"
        }
    });
