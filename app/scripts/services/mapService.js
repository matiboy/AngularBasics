'use strict';

angular.module('AngularBasicsApp')
  .service('Mapservice', function Mapservice(GMapsService, $cacheFactory, $q) {
    var cache = $cacheFactory('Mapservice');
    var currentAddress = '';
    var errors = {
        NO_RESULT: 1,
        NO_INTERNET: 2
    };
    return {
        // Get / set function for latest address
        current: function(v){
            if(angular.isDefined(v)) {
                currentAddress = v;
            } else {
                return currentAddress;
            }
        },
        errors: errors,
        // Handling cache for address results
    	locate: function(address) {
    		var cached = cache.get(address);
            if(cached) {
                var q = $q.defer();
                q.resolve(cached);
                return q.promise;
            } else {
                return GMapsService.locate(address).then(function(data) {
                    if(data.status === GMapsService.status.OK) {
                        // Cache only if results found
                        cache.put(address, data.results);
                        return data.results;
                    } else if(data.status === GMapsService.status.NO_RESULT) {
                        // Consider as a failure
                        throw {
                            status: errors.NO_RESULT
                        }
                    }
                }, function() {
                    throw {
                        status: errors.NO_INTERNET
                    }
                });
            }
    	}
    }
  });
