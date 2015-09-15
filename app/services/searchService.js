angular.module("searchService",["requestsService", "searchModelService"])
    .constant("baseUrl", "http://velvet-azure.intelliconnect.cch.com/")
    .provider("searchService", function() {

            var expandValue = null,
            clusteredValue = false,
            workspaceIdValue = null,
            setFilterTreeIdValue = null,
            resourceIdValue = null,
            sortValue = null,
            citationComboValue = false,
            dcValue = null;

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

                $get: function (requestsService, searchModelService) {

                    return {

                        searchRequest: function (searchValue) {

                            var params = {
                                $expand: expandValue,
                                    clustered: clusteredValue,
                                    workspaceId: workspaceIdValue,
                                    filterTreeId: setFilterTreeIdValue,
                                    resourceId: resourceIdValue,
                                    query: searchValue,
                                    sort: sortValue,
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