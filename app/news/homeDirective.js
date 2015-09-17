angular.module("homeDirective", ["requestsService"])
    .directive("homeDetailView", function($log, requestsService) {

        return {

            scope: {
                id: "="
            },

            replace: true,

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

                    if(angular.isObject(data) && data.hasOwnProperty("d")) {
                        if(angular.isObject(data["d"]) && data["d"].hasOwnProperty("results")) {
                            var arr = data["d"]["results"];
                            }
                        }
                        if(angular.isArray(arr)) {
                            firstArray = arr.map(function(item) {
                                if(angular.isObject(item) && item.hasOwnProperty("Id") && item.hasOwnProperty("Title")) {
                                    return {id: item["Id"], title: item["Title"]};
                                }
                            })
                        }
                    return firstArray;
                };

                getFirstEntity();
                getSecondEntity();
            },

            templateUrl: "app/news/homeView.html"
        }
    });