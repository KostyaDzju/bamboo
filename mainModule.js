angular.module("mainModule",["ngRoute"])
    .constant("baseUrl", "http://velvet.intelliconnect.stg.cch.com")
    .config(function($routeProvider, $locationProvider) {
        $locationProvider = {
            html5Mode: true,
            requireBase: false
        };

        $routeProvider.when("/login", {
            templateUrl: "/firstBamboo/loginView.html"
        });

        $routeProvider.when("/news", {
            templateUrl: "/firstBamboo/newsView.html"
        })
    })
    .controller("authCtrl", function($scope, $http, $location, loginService) {

        $scope.openLoginPage = function() {
            $location.path("/login");
        };
        $scope.authenticate = function(userName, password) {
            loginService.authenticate();
            $location.path("/news")
        };

        $scope.openLoginPage();
    })
    .service("loginService", function($http, baseUrl) {
        return {
            authenticate: function() {
                $http({
                    method: "GET",
                    url: baseUrl + "/identity-v1.svc/AccessToken?type=%27Twill-RC4-Token%27&_dc=1441283889754",
                    headers: {
                        'X-ApiKey': "3CE89ED16A884BB48E0C587101589175",
                        'Authorization': "BasicZXhhZGVsMDFAd2suY29tOnBhc3N3b3Jk"
                    }
                }).success(function(token) {
                    console.log(token);
                })
            }
        }
    });