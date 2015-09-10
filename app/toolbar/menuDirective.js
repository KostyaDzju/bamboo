angular.module("menuDirective", [])
    .directive("menuView", function() {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                $scope.menuOpened = false;

                $scope.toggleMenu = function(event) {
                    $scope.menuOpened = !($scope.menuOpened);

                    event.stopPropagation();
                };

                window.onclick = function () {
                    if($scope.menuOpened) {
                        $scope.menuOpened = false;
                        $scope.$apply();
                    }
                };
            },

            templateUrl: "app/toolbar/menuView.html"
        }

    });