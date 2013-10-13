'use strict';

angular.module('AngularBasicsApp')
  .service('Mapservice', function Mapservice($http) {
    var url = _.template( 'http://maps.googleapis.com/maps/api/geocode/json?address=<%= address %>&sensor=false' );
    return {
    	getAddress: function(address) {
    		console.debug('Loading address from ' + url({
    			address: address
    		}));
    		return $http.get(url({
    			address: address
    		})).then(function(resp) {
    			return resp.data.results[0].address_components;
    		});
    	}
    }
  });
