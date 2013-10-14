'use strict';

angular.module('GMaps', ['ng'])
  .provider('GMapsService', function() {
    var base = 'somerandomurl';
    var urls = {
      LOCATE: _.template( 'http://<%= base %>/maps/api/geocode/json?address=<%= address %>&sensor=false' )
    };
    var status = {
      NO_RESULT: 'ZERO_RESULTS',
      OK: 'OK'
    };
    // Configuration functions
    this.setBaseUrl = function(url) {
      base = url;
    }

    // Provider
    this.$get = function($http) {
      return {
        baseUrl: base,
        locate: function(address){ 
          return $http.get(urls.LOCATE({
            base: base,
            address: address
          })).then(function(resp) {
            return resp.data;
          }, function() {
            throw {
              message: 'No internet'
            }
          });
        },
        status: status
      }
    }
  });