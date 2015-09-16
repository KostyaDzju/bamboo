angular.module("searchManager", [])
    .directive("searchManager", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                $scope.searchQuery = window.localStorage.getItem("searchQuery");
                $scope.searchComplete = false;

                $scope.$on('searchEnded', function(event, searchModel) {

                    $scope.totalResults = searchModel.getSearchTotalResults();
                    $scope.clusters = searchModel.getClustersResult();

                    angular.element(document.getElementById('searchResultContentId')).removeClass("loadingBGColor");

                    $scope.searchComplete = true;
                });
            },


            templateUrl: "app/search/tpl/searchClustersView.html"
        }
    });