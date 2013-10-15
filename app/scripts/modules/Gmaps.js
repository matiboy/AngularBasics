'use strict';

angular.module('GMaps', ['ng'])
  .provider('GMapsService', function() {
    var base = 'somerandomurl';
    var urls = {
      LOCATE: _.template( 'http://<%= base %>/maps/api/geocode/json?address=<%= address %>&sensor=false' )
    };
    
    // Configuration functions
    this.setBaseUrl = function(url) {
      base = url;
    }

    // Provider
    this.$get = function($http, GMapsStatus) {
      return {
        baseUrl: base,
        // Takes an address
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
        }
      }
    }
  }).constant('GMapsStatus', {
    NO_RESULT: 'ZERO_RESULTS',
    OK: 'OK'
  });