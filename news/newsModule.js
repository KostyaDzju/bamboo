angular.module("newsModule",["requestsService"])

    .controller("newsCtrl", function($scope, $log, requestsService) {

        $scope.firstNew = null;
        $scope.secondNew = null;

        function getFirstNew() {
            requestsService.firstNewRequest(function(data) {
                $scope.firstNew = data;
            }, function (error) {
                $log.log(error);
            });
        }

        function getSecondNew() {
            requestsService.secondNewRequest(function (data) {
                $scope.secondNew = data;
            }, function(error) {
                $log.log(error);
            })
        }

        getFirstNew();
        getSecondNew();
    });