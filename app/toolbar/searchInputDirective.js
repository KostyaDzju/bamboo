angular.module("searchInputDirective", [])
    .directive("searchInputView", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                $scope.clearSearchInput = function() {
                    $scope.search = null;
                }
            },

            templateUrl: "app/toolbar/searchInputView.html"
        }

    });