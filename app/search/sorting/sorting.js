angular.module("sorting", ["configService"])
    .directive("sortingView", function() {
        return {

            restrict: "EA",

            replace: true,

            templateUrl: "app/search/sorting/sortingView.html",

            controller: function ($scope, sortingService) {

                $scope.sortMenu = false;

                $scope.sortingCriterias = sortingService.getSortingCriteria();

                $scope.selectedCriteria = $scope.sortingCriterias[0];

                $scope.toggleMenu = function(event) {

                    $scope.sortMenu = !$scope.sortMenu;
                    event.stopPropagation();
                    angular.element(document.getElementById("body")).append("<div class='overlay'></div>");
                }
            }
        }
    });