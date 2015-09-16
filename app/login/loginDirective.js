angular.module("loginDirective", ["requestsService"])
    .directive("loginViewDetails", function($state, $log, requestsService) {

        return {

            restrict: "E",

            controller: function($scope) {

                $scope.authenticate = function() {

                    requestsService.authenticateRequest(function(token) {
                        saveToken(token);
                        $state.go("home");
                    }, function(error) {
                        $log.log(error);
                    });
                };

                function saveToken(token) {

                    if(angular.isObject(token) && token.hasOwnProperty("d")) {
                        if(angular.isObject(token["d"]) && token["d"].hasOwnProperty("AccessToken")) {
                            if(angular.isObject(token["d"]["AccessToken"]) && token["d"]["AccessToken"].hasOwnProperty("Code")) {
                                window.localStorage.setItem("token", token["d"]["AccessToken"]["Code"]);
                            }
                        }
                    }
                }
            },

            templateUrl: "app/login/loginView.html"
        }
    });