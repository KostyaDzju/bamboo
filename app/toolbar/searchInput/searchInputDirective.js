angular.module("searchInputDirective", ["searchService", "searchModelService"])
    .directive("searchInputView", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope, $rootScope, searchService, searchModelService) {

                $scope.clearSearchInput = function() {
                    $scope.searchValue = null;
                };

                $scope.performSearch = function(searchValue) {

                    $rootScope.$broadcast('searchStarted', searchValue);

                    searchModelService.setSearchQuery(searchValue);
                    searchService.searchRequest(searchValue);
                };
            },

            templateUrl: "app/toolbar/searchInput/searchInputView.html"
        }

    });