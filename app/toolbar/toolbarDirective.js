angular.module("toolbarDirective", ["menuDirective", "searchInputDirective", "logoDirective"])
    .directive("toolbarView", function($state) {

        return {

            restrict: "E",

            replace: true,

            templateUrl: "app/toolbar/toolbarView.html",

            controller: function($scope) {
                $scope.$on('searchStarted', function(event, searchValue) {

                    window.localStorage.setItem("searchQuery", searchValue);

                    $scope.newValue = searchValue;

                    angular.element(document.getElementById('searchResultContentId')).addClass("loadingBGColor");

                    $scope.searchComplete = false;

                    $state.go("searchResult");
                })
            }
        }

    });