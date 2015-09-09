angular.module("newsDirective", ["requestsService"])
    .directive("newsDetailView", function($log, requestsService) {

        return {

            scope: {
                id: "="
            },

            restrict: "E",

            controller: function($scope) {
                getFirstEntity = function() {
                    requestsService.firstNewRequest(function(data) {
                        $scope.firstNew = processData(data);
                    }, function (error) {
                        $log.log(error);
                    });
                };

                getSecondEntity = function() {
                    requestsService.secondNewRequest($scope.id, function (data) {
                        $scope.secondNew = processData(data);
                    }, function(error) {
                        $log.log(error);
                    })
                };

                processData = function(data) {

                    var firstArray = [];

                    if(angular.isObject(data)) {
                        var arr = data["d"]["results"];
                        if(angular.isArray(arr)) {
                            firstArray = arr.map(function(item) {
                                return {id: item["Id"], title: item["Title"]};
                            })
                        }
                    }
                    return firstArray;
                };

                getFirstEntity();
                getSecondEntity();
            },

            templateUrl: "app/news/newsView.html"
        }
    });