'use strict';

angular.module('AngularBasicsApp')
.service('Mapservice', function Mapservice(GMapsService, $cacheFactory, $q, GMapsStatus, MapserviceErrors) {
  var cache = $cacheFactory('Mapservice');
  var currentAddress = '';
  return {
    // Get / set function for latest address
    current: function(v){
      if(angular.isDefined(v)) {
        currentAddress = v;
      } else {
        return currentAddress;
      }
    },
    // Handling cache for address results
    locate: function(address) {
      var cached = cache.get(address);
      if(cached) {
        var q = $q.defer();
        q.resolve(cached);
        return q.promise;
      } else {
        return GMapsService.locate(address).then(function(data) {
          if(data.status === GMapsStatus.OK) {
              // Cache only if results found
              cache.put(address, data.results);
              return data.results;
          } else if(data.status === GMapsStatus.NO_RESULT) {
            // Consider as a failure
            throw {
              status: MapserviceErrors.NO_RESULT
            }
          }
        }, function() {
          throw {
            status: MapserviceErrors.NO_INTERNET
          }
        });
      }
    }
  }
}).value('MapserviceErrors', {
  NO_RESULT: 1,
  NO_INTERNET: 2
});
