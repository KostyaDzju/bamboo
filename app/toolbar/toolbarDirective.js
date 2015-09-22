angular.module("toolbarDirective", ["menuDirective", "searchInputDirective", "logoDirective"])
    .directive("toolbarView", function($state) {

        return {

            restrict: "E",

            replace: true,

            transclude: true,

            templateUrl: "app/toolbar/toolbarView.html",

            controller: function($scope) {

                $scope.$on('searchStarted', function(event, searchValue) {

                    $scope.searchQuery = searchValue;

                    $scope.searchComplete = false;

                    $state.go("searchResult");
                });
            }

            /*link: function(scope, iElement, iAttrs, controller, transcludeFn) {
                transcludeFn(iElement, function(clone) {
                    iElement.append(clone);
                })
            }*/

        }
    });