angular.module("sorting", ["configService", "searchService", "searchModelService"])
    .directive("sortingView", function() {
        return {

            restrict: "EA",

            replace: true,

            templateUrl: "app/search/sorting/sortingView.html",

            controller: function ($rootScope, $scope, sortingService, searchService, searchModelService) {

                var overlayDiv = angular.element(document.getElementById("overlay"));

                $scope.sortMenu = false;

                $scope.sortingCriterias = sortingService.getSortingCriteria();

                $scope.selectedCriteria = $scope.sortingCriterias[0];

                $scope.toggleSortMenu = function(event) {

                    $scope.sortMenu = !$scope.sortMenu;
                    event.stopPropagation();
                    overlayDiv.addClass("overlay");
                };

                $scope.sortValueClickAction = function(event) {

                    $scope.isClustered = undefined;

                    $scope.selectedCriteria = event.target.innerHTML;

                    clearMarkedSortValue($scope.selectedCriteria);

                    var selectedValue = angular.element(event.target);

                    selectedValue.addClass("selectedSortingValue");

                    searchService.setSortValue($scope.selectedCriteria);

                    $rootScope.$broadcast('searchStarted', searchModelService.getSearchQuery());
                    searchService.searchRequest(searchModelService.getSearchQuery());
                };

                var clearMarkedSortValue = function() {

                    var sortingValueList = angular.element(document.getElementById("sortingValueList"));
                    var listLi = sortingValueList.children();

                    for(var i = 0; i < listLi.length; i++) {
                        listLi.removeClass("selectedSortingValue");
                    }
                };

                /*$scope.addMarkSign = function() {
                    var sortingValueList = angular.element(document.getElementById("sortingValueList"));
                    var listLi = sortingValueList.firstChild();

                    listLi.addClass("selectedSortingValue");

                    for(var i = 0; i < listLi.length; i++) {
                        if(listLi[i].innerHTML == $scope.selectedCriteria) {
                        }
                    }
                };*/

                window.onclick = function (event) {

                    if($scope.sortMenu) {

                        $scope.sortMenu = false;
                        overlayDiv.removeClass("overlay");
                        $scope.$apply();
                    }
                };
            }
        }
    });