angular.module("mainModule",["ngRoute"])

    .constant("baseUrl", "http://velvet.intelliconnect.stg.cch.com")

    .config(function($routeProvider) {

        $routeProvider.when("/login", {
            templateUrl: "/firstBamboo/loginView.html"
        });

        $routeProvider.when("/news", {
            templateUrl: "/firstBamboo/newsView.html"
        })
    })

    .controller("authCtrl", function($scope, $http, $location, $log, requestsService) {

        $scope.rightToken = null;

        $scope.openLoginPage = function() {
            $location.path("/login");
        };

        $scope.authenticate = function(userName, password) {

            $http(requestsService.authenticateRequest())
                .success(function(token) {
                    $scope.findRightToken(token);
                    $scope.saveToken(token);
                    $scope.getNews();
                })
                .error(function(error) {
                    $log.log(error);
                });
        };

        $scope.findRightToken = function(token) {

            for (var prop in token) {
                if(token.hasOwnProperty(prop)) {
                    if(angular.isObject(token[prop])) {
                        $scope.findRightToken(token[prop])
                    } else {
                        if(prop == "Code") {
                            $scope.rightToken = token[prop];
                        }
                    }
                }
            }
        };

        $scope.saveToken = function() {
            if($scope.rightToken != null) {
                window.localStorage['token'] = $scope.rightToken;
            }
        };

        $scope.getNews = function() {
            $http(requestsService.newsRequest())
                .success(function(data) {
                    $scope.news = data;
                    $log.log($scope.news);
                    $location.path("/news");
                })
                .error(function(error) {
                    $log.log(error)
                });
        };

        $scope.openLoginPage();
    })

    .service("requestsService", function($http, $location, $log, baseUrl) {

        return {

            authenticateRequest: function() {

                return {
                    method: "GET",
                    url: baseUrl + "/identity-v1.svc/AccessToken?type=%27Twill-RC4-Token%27&_dc=1441283889754",
                    headers: {
                        'X-ApiKey': "3CE89ED16A884BB48E0C587101589175",
                        'Authorization': "BasicZXhhZGVsMDFAd2suY29tOnBhc3N3b3Jk"
                    }
                }
            },
            newsRequest: function() {

                return {
                    method: "GET",
                    url: baseUrl + "/rsi-v1.svc/UserTrackers?$orderby=Title&$skip=0&$top=501&_dc=1441360971852",
                    headers: {
                        'X-ApiKey': "3CE89ED16A884BB48E0C587101589175",
                        'Authorization': window.localStorage['token']
                    }
                }
            }
        }
    });