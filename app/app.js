angular.module("app",["ui.router", "loginDirective", "homeDirective", "toolbarDirective", "searchManager", "loadingSpin", "sorting"])

    .config(function($stateProvider, $urlRouterProvider, searchServiceProvider, sortingServiceProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "/app/pages/loginView.html"
            })
            .state("home", {
                url: "/home",
                templateUrl: "/app/pages/homeViewDetails.html"
            })
            .state("searchResult", {
                url: "/searchResult",
                templateUrl: "/app/pages/searchResult.html"
            })
            .state("citations", {
                url: "/news",
                templateUrl: "/app/pages/citations.html"
            });

        searchServiceProvider.setExpandValue('ClusterResult/Clusters/Items,ClusterResult/FilterTrees/Root/Children,ClusterResult/TopAnswer');
        searchServiceProvider.setClusteredValue(true);
        searchServiceProvider.setworkspaceIdValue(-1);
        searchServiceProvider.setFilterTreeIdValue(['cef573c2-fdc5-11dd-87af-0800200c9a66','cef573c4-fdc5-11dd-87af-0800200c9a66']);
        searchServiceProvider.setResourceIdValue('quickAnswers');
        searchServiceProvider.setSortValue('Relevance');
        searchServiceProvider.setCitationComboValue(true);
        searchServiceProvider.setDCValue(1441894669044);

        sortingServiceProvider.setSortingCriteria(["Relevance", "Most Recent", "Categorized View"]);
    })

    .controller("mainCtrl", function($scope) {
    });