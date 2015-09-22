angular.module("configService",[])
    .provider("sortingService", function() {

        var sortingCriteria = [];

        return {

            setSortingCriteria: function(arr) {
                sortingCriteria = arr;
            },

            $get: function () {

                return {

                    getSortingCriteria: function() {
                        return sortingCriteria;
                    }
                }
            }
        }
    });