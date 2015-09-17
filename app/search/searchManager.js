angular.module("searchManager", ["searchModelService"])
    .directive("searchManager", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope, $state, searchModelService) {

                $scope.searchQuery = searchModelService.getSearchQuery();

                $scope.searchComplete = false;

                $scope.$on('searchEnded', function(event, searchModel) {

                    $scope.totalResults = searchModel.getSearchTotalResults();
                    $scope.clusters = searchModel.getClustersResult();

                    angular.element(document.getElementById('searchResultContentId')).removeClass("loadingBGColor");

                    $scope.searchComplete = true;
                });

                $scope.navigateToHome = function() {
                    $state.go("home");
                };
            },

            templateUrl: "app/search/tpl/searchClustersView.html"
        }
    })
    .filter('to_trusted', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    });