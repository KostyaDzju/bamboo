angular.module("toolbarDirective", ["menuDirective", "searchInputDirective", "logoDirective"])
    .directive("toolbarView", function($state, $compile) {

        return {

            restrict: "E",

            replace: true,

            transclude: true,

            templateURL: "app/toolbar/toolbarView.html",

            controller: function($scope) {

                $scope.$on('searchStarted', function(event, searchValue) {

                    $scope.searchQuery = searchValue;

                    $state.go("searchResult");
                });
            },

            link: function(scope, element, attrs, ctrl, transclude) {

                transclude(function(clone){

                    if(clone.length == 0) {
                        element.append('<div class="toolbar"><menu-view></menu-view><search-input-view></search-input-view><logo-view></logo-view></div>');
                        $compile(element)(scope);
                    } else {
                        element.append(clone);
                    }
                });
            }
        }
    });