angular.module("loginModule",["requestsService"])

    .controller("loginCtrl", function($scope, $log, $state, requestsService) {

        $scope.authenticate = function() {

            requestsService.authenticateRequest(function(token) {
                findRightToken(token);
                $state.go("news");
            }, function(error) {
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
