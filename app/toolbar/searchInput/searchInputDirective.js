angular.module("searchInputDirective", ["searchService"])
    .directive("searchInputView", function(searchService) {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope, $rootScope) {

                $scope.clearSearchInput = function() {
                    $scope.searchValue = null;
                };

                $scope.performSearch = function(searchValue) {

                    $rootScope.$broadcast('searchStarted');

                    searchService.searchRequest(searchValue);
                };
            },

            templateUrl: "app/toolbar/searchInput/searchInputView.html"
        }

    });