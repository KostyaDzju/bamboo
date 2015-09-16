angular.module("toolbarDirective", ["menuDirective", "searchInputDirective", "logoDirective"])
    .directive("toolbarView", function($state) {

        return {

            restrict: "E",

            templateUrl: "app/toolbar/toolbarView.html",

            controller: function($scope) {
                $scope.$on('searchStarted', function(event, searchValue) {
                    window.localStorage.setItem("searchQuery", searchValue);
                    $state.go("searchResult");
                })
            }
        }

    });