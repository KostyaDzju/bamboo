angular.module("searchManager", [])
    .directive("searchManager", function($log) {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                $scope.$on('searchEnded', function(event, searchModel) {
                    $scope.totalResults = searchModel.getSearchTotalResults();
                    $scope.searchQuery = searchModel.getSearchQuery();
                });
            },


            templateUrl: "app/search/searchClustersView.html"
        }
    });