angular.module("menuDirective", [])
    .directive("menuView", function($state) {

        return {

            restrict: "EA",

            replace: true,

            controller: function($scope) {

                var menu = angular.element(document.getElementById('menuContent'));

                $scope.menuOpened = false;

                $scope.toggleMenu = function(event) {

                    if($scope.menuOpened) {
                        $scope.menuOpened = false;
                        menu.removeClass("showMenuContent");
                    } else {
                        $scope.menuOpened = true;
                        menu.addClass("showMenuContent");
                    }
                    event.stopPropagation();
                };

                $scope.openCitations = function() {
                    $state.go("citations");
                };

                window.onclick = function (event) {

                    var clickInsideMenu = false;

                    var target = (event && event.target);

                    if($scope.menuOpened) {
                        while(target.parentNode) {
                            if (target == menu[0]) {
                                clickInsideMenu = true;
                                break;
                            }
                            target = target.parentNode;
                        }

                        if(!clickInsideMenu) {
                            $scope.menuOpened = false;
                            angular.element(document.getElementById('menuContent')).removeClass("showMenuContent");
                        }

                    }
                };
            },

            templateUrl: "app/toolbar/menu/menuView.html"
        }

    });