angular.module("menuDirective", [])
    .directive("menuView", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                $scope.toggle = true;

                $scope.toggleMenu = function() {
                    $scope.toggle = $scope.toggle === false;
                }
            },

            templateUrl: "app/toolbar/menuView.html"
        }

    });