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

                searchModel.searchId = searchResult["d"]["Id"];

                if(searchResult["d"]["Clustered"] === true) {

                    var clusteredResultObj = searchResult["d"]["ClusterResult"];

                    searchModel.totalResults = clusteredResultObj["TotalResults"];

                    var clusters = clusteredResultObj["Clusters"]["results"];

                    parseClusters(clusters);

                    searchModel.totalClusters = clusteredResultObj["TotalClusters"];

                    var filters = clusteredResultObj["FilterTrees"]["results"];

                    parseFilters(filters);
                }

                $rootScope.$broadcast('searchEnded', searchModel);
            },

            setSearchQuery: function(query) {
                searchModel.query = query;
            },

            getSearchQuery: function () {
                return searchModel.getSearchQuery();
            }
        }
    });