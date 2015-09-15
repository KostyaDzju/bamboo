angular.module("searchModelService",[])
    .service("searchModelService", function($rootScope) {

        var searchModel =  {

            getSearchId: function() {
                return searchModel.searchId;
            },
            getSearchQuery: function() {
                return searchModel.query;
            },

            getSearchClusters: function() {
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
                cluster["items"] = results[i]["Items"]["results"];

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

                searchModel.query = searchResult["d"]["Query"];

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

            processSearchResult: function(searchResult) {
                var myData = JSON.parse(searchResult, function(key, value) {
                    var type;
                    if (value && typeof value === 'object') {
                        type = value.type;
                        if (typeof type === 'string' && typeof window[type] === 'function') {
                            return new (window[type])(value);
                        }
                    }
                    return value;
                });

                console.log(myData);
            }
        }
    });