angular.module("requestsService",[])
    .constant("baseUrl", "http://velvet.intelliconnect.stg.cch.com")
    .service("requestsService", function($http, $log, baseUrl) {
        return {
            authenticateRequest: function(successFn, errorFn) {

                $http({
                    method: "GET",
                    url: baseUrl + "/identity-v1.svc/AccessToken?type=%27Twill-RC4-Token%27&_dc=1441283889754",
                    headers: {
                        'X-ApiKey': "3CE89ED16A884BB48E0C587101589175",
                        'Authorization': "BasicZXhhZGVsMDFAd2suY29tOnBhc3N3b3Jk"
                    }
                })
                    .success(successFn)
                    .error(errorFn);
            },
            firstNewRequest: function(successFn, errorFn) {

                $http({
                    method: "GET",
                    url: baseUrl + "/rsi-v1.svc/UserTrackers?$orderby=Title&$skip=0&$top=501&_dc=1441360971852",
                    headers: {
                        'X-ApiKey': "3CE89ED16A884BB48E0C587101589175",
                        'Authorization': window.localStorage.getItem("token")
                    }
                })
                    .success(successFn)
                    .error(errorFn);
            },
            secondNewRequest: function(parameter, successFn, errorFn) {

                $http({
                    method: "GET",
                    url: baseUrl + "/rsi-v1.svc/ContentTreeNodes('" + parameter + "')/Children?workspaceId=-1&$orderby=Index&$skip=0&$top=501&_dc=1441364155096",
                    headers: {
                        'X-ApiKey': "3CE89ED16A884BB48E0C587101589175",
                        'Authorization': window.localStorage.getItem("token")
                    }
                })
                    .success(successFn)
                    .error(errorFn);
            }
        }
    });