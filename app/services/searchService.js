angular.module("searchService",["requestsService", "searchModelService", "configService"])
    .constant("expandClustered", 'ClusterResult/Clusters/Items,ClusterResult/FilterTrees/Root/Children,ClusterResult/TopAnswer')
    .constant("expandNotClustered", 'Result/Items,Result/Citations/Items,Result/FilterTrees/Root/Children,Result/TopAnswer')
    .provider("searchService", function(expandClustered, expandNotClustered) {

            var expandValue = null,
            clusteredValue = false,
            workspaceIdValue = null,
            setFilterTreeIdValue = null,
            resourceIdValue = null,
            sortValue = null,
            citationComboValue = false,
            dcValue = null,
            searchQuery = null;

            return {

                setExpandValue: function (value) {
                    expandValue = value;
                },

                setClusteredValue: function (value) {
                    clusteredValue = value;
                },

                setworkspaceIdValue: function (value) {
                    workspaceIdValue = value;
                },

                setFilterTreeIdValue: function(value) {
                    setFilterTreeIdValue = value;
                },

                setResourceIdValue: function(value) {
                    resourceIdValue = value;
                },

                setSortValue: function(value) {
                    sortValue = value;
                },

                setCitationComboValue: function(value) {
                    citationComboValue = value;
                },

                setDCValue: function(value) {
                    dcValue = value;
                },

                $get: function ($log, requestsService, searchModelService, sortingService) {

                    var isClustered = function(sortValue) {
                        return sortValue == "Categorized View";

                    };

                    var getExpandValue = function(sortValue) {
                        return sortValue == "Categorized View" ? expandClustered : expandNotClustered;
                    };

                    var prepareSortValue = function(sortValue) {
                        return sortValue == "Most Recent" ? "mostrecent" : "relevance";
                    };

                    return {

                        setSortValue: function (value) {
                            sortValue = value;
                        },

                        searchRequest: function (searchValue) {

                            searchQuery = searchValue;

                            var sort = sortValue || sortingService.getSortingCriteria()[0];

                            var params = {
                                $expand: getExpandValue(sort),
                                    clustered: isClustered(sort),
                                    workspaceId: workspaceIdValue,
                                    filterTreeId: setFilterTreeIdValue,
                                    resourceId: resourceIdValue,
                                    query: searchQuery,
                                    sort: prepareSortValue(sort),
                                    citationCombo: citationComboValue,
                                    _dc: dcValue
                            };

                            requestsService.performSearchRequest(params, searchModelService.parseResult, function (error) {
                                $log.log(error);
                            });
                        }
                    }
                }
            }
    });