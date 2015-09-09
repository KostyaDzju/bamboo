angular.module("toolbarDirective", ["menuDirective", "searchInputDirective", "logoDirective"])
    .directive("toolbarView", function() {

        return {

            restrict: "E",

            templateUrl: "app/toolbar/toolbarView.html"
        }

    });