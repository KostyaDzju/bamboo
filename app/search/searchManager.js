angular.module("searchManager", [])
    .directive("searchManager", function($log) {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                $scope.$on('searchEnded', function(event, searchModel) {
                    searchModel.getSearchId();
                });
            },


            templateUrl: "app/search/searchClustersView.html"
        }
    });