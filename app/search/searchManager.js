angular.module("searchManager", [])
    .directive("searchManager", function() {

        return {

            restrict: "EA",

            replace: true,

            require: "toolbarView",

            link: function($scope, ctrl) {
                console.log(ctrl.newValue);
            },

            controller: function($scope, $state) {

                $scope.searchQuery = window.localStorage.getItem("searchQuery");
                //console.log($scope.newValue);
                $scope.searchComplete = false;

                $scope.$on('searchEnded', function(event, searchModel) {

                    $scope.totalResults = searchModel.getSearchTotalResults();
                    $scope.clusters = searchModel.getClustersResult();

                    angular.element(document.getElementById('searchResultContentId')).removeClass("loadingBGColor");

                    $scope.searchComplete = true;
                });

                $scope.navigateToHome = function() {
                    $state.go("home");
                }
            },


            templateUrl: "app/search/tpl/searchClustersView.html"
        }
    });