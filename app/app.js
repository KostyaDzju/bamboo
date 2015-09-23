angular.module("app",["ui.router", "loginDirective", "homeDirective", "toolbarDirective", "searchManager", "loadingSpin", "sorting", "breadcrumb"])

    .config(function($stateProvider, $urlRouterProvider, searchServiceProvider, sortingServiceProvider) {

        $urlRouterProvider.otherwise("/login");

        sortingServiceProvider.setSortingCriteria(["Relevance", "Categorized View", "Most Recent"]);

        $stateProvider
            .state("common", {
                templateUrl: "/app/pages/common.html",
                abstract:true
            })
            .state("login", {
                url: "/login",
                templateUrl: "/app/pages/loginView.html"
            })
            .state("home", {
                url: "/home",
                parent: "common",
                templateUrl: "/app/pages/homeViewDetails.html"
            })
            .state("searchResult", {
                url: "/searchResult",
                parent: "common",
                templateUrl: "/app/pages/searchResult.html"
            })
            .state("citations", {
                url: "/news",
                parent: "common",
                templateUrl: "/app/pages/citations.html"
            });

        sortingServiceProvider.setSortingCriteria(["Relevance", "Categorized View", "Most Recent"]);

        //searchServiceProvider.setExpandValue('ClusterResult/Clusters/Items,ClusterResult/FilterTrees/Root/Children,ClusterResult/TopAnswer');
        //searchServiceProvider.setClusteredValue(true);
        searchServiceProvider.setworkspaceIdValue(-1);
        searchServiceProvider.setFilterTreeIdValue(['cef573c2-fdc5-11dd-87af-0800200c9a66','cef573c4-fdc5-11dd-87af-0800200c9a66']);
        searchServiceProvider.setResourceIdValue('quickAnswers');
        //searchServiceProvider.setSortValue('Relevance');
        searchServiceProvider.setCitationComboValue(true);
        searchServiceProvider.setDCValue(1441894669044);
    })

    .controller("mainCtrl", function($scope) {
    });