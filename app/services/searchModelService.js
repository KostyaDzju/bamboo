angular.module("searchModelService",[])
    .service("searchModelService", function($rootScope) {

        var searchModel =  {

            getSearchId: function() {
                return searchModel.searchId;
            },
            getSearchQuery: function() {
                return searchModel.query;
            },

            getClustersResult: function() {
                return searchModel.clusters
            },

            getSearchTotalClusters: function() {
                return searchModel.totalClusters;
            },

            getSearchTotalResults: function() {
                return searchModel.totalResults;
            },

            getSearchFilters: function() {
                return searchModel.filters;
            },

            getResults: function() {
                return searchModel.results;
            }
        };

        function parseClusters(results) {

            searchModel.clusters = [];

            for(var i =0; i < results.length; i++) {

                var cluster = {};

                cluster["searchId"] = results[i]["Id"];
                cluster["title"] = results[i]["Title"];
                cluster["items"] = results[i]["Items"]["results"];
                cluster["totalResults"] = results[i]["TotalResults"];

                searchModel.clusters.push(cluster);
            }
        }

        function parseFilters(results) {

            searchModel.filters = [];

            for(var i =0; i < results.length; i++) {

                searchModel.filters.push(results[i]);
            }
        }

        return {

            parseResult: function (searchResult) {

                var entireSearchObject = searchResult["d"];

                searchModel.searchId = entireSearchObject["Id"];

                var filters = null;

                if(entireSearchObject["Clustered"] === true) {

                    searchModel.isClustered = true;

                    var clusteredResultObj = entireSearchObject["ClusterResult"];

                    searchModel.totalResults = clusteredResultObj["TotalResults"];

                    var clusters = clusteredResultObj["Clusters"]["results"];

                    parseClusters(clusters);

                    searchModel.totalClusters = clusteredResultObj["TotalClusters"];

                    filters = clusteredResultObj["FilterTrees"]["results"];

                } else {

                    searchModel.isClustered = false;

                    var resultObj = entireSearchObject["Result"];

                    searchModel.totalResults = resultObj["TotalResults"];

                    searchModel.results = resultObj["Items"]["results"];

                    filters = resultObj["FilterTrees"]["results"];
                }

                parseFilters(filters);
                $rootScope.$broadcast('searchEnded', searchModel);
            },

            setSearchQuery: function(query) {
                searchModel.query = query;
            },

            getSearchQuery: function () {
                return searchModel.getSearchQuery();
            },

            getClusteredValue: function() {
                return searchModel.isClustered;
            }
        }
    });