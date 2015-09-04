angular.module("loginModule",["requestsService"])

    .controller("loginCtrl", function($scope, $http, $log, $location, requestsService) {

        $scope.authenticate = function() {

            $http(requestsService.authenticateRequest())
                .success(function(token) {
                    findRightToken(token);
                    $location.path("/news");
                })
                .error(function(error) {
                    $log.log(error);
                });
        };

        function findRightToken(token) {
            for (var prop in token) {
                if(token.hasOwnProperty(prop)) {
                    if(angular.isObject(token[prop])) {
                        findRightToken(token[prop]);
                    } else {
                        if(prop == "Code") {
                            window.localStorage['token'] = token[prop];
                        }
                    }
                }
            }
        }
    });
