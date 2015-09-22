angular.module("searchManager", ["searchModelService"])
    .directive("searchManager", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope, $state, searchModelService) {

                $scope.isClustered = searchModelService.getClusteredValue();

                $scope.searchQuery = searchModelService.getSearchQuery();

                $scope.searchComplete = false;

                $scope.$on('searchEnded', function(event, searchModel) {

                    $scope.totalResults = searchModel.getSearchTotalResults();
                    $scope.clusters = searchModel.getClustersResult();

                    $scope.results = searchModel.getResults();

                    $scope.searchComplete = true;
                });

                $scope.navigateToHome = function() {
                    $state.go("home");
                };

                $scope.getTemplateUrl = function() {
                    if($scope.isClustered) {
                        return "app/search/tpl/searchClustersView.html";
                    } else {
                        return "app/search/tpl/searchResultView.html";
                    }
                }
            },

            template : '<div ng-include="getTemplateUrl()"></div>'

            /*templateUrl: function($scope) {
                if($scope.isClustered) {
                    return "app/search/tpl/searchClustersView.html";
                } else {
                    return "app/search/tpl/searchResultView.html";
                }
            }*/
        }
    })
    .filter('to_trusted', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    });