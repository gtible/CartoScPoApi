'use strict';

/* Services */

angular.module('apiCarto.services', [])
  .config(function ( $httpProvider ) {
       //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .factory('fileService', [ "$http", "$q", function($http, $q) {

   return {

     getFile : function(url){
       var deferred = $q.defer();
       $http.get(url).success(function(data){
         deferred.resolve(data);
       }).error(function(){
         deferred.reject("An error occured while fetching file");
       });

       return deferred.promise;
     }
   }
  }])
  .factory('apiService', ['$http', '$q', '$rootScope',  
    function($http, $q, $rootScope) {
   return {
     getAllCenters: function(params){
       var deferred = $q.defer();
       var serviceUrl = 'http://localhost:8080/api/centers'
       $http({
          method: 'GET',
          url: serviceUrl,
          params: params,
          cache: true
        }).success(function(data){
         deferred.resolve(data);
       }).error(function(){
         deferred.reject("Error 500 : An error occured while fetching data");
       });
       return deferred.promise;
     },
     createCenter: function(params) {
      console.log("params in service", params);
       var deferred = $q.defer();
       var serviceUrl = 'http://localhost:8080/api/centers'
       $http({
          method: 'POST',
          url: serviceUrl,
          params: params,
          cache: true
        }).success(function(data){
          console.log("data", data);
         deferred.resolve(data);
       }).error(function(){
         deferred.reject("Error 500 : An error occured while fetching data");
       });
       return deferred.promise;
     }
    }
}])