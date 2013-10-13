'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, Mapservice) {
    $scope.title = 'Hello';
    var addressParts;
    Mapservice.getAddress('Somerset, Kuala Lumpur, Malaysia').then(function(parts) {
    	console.debug('Received parts for address: ', parts);
    	addressParts = parts;
    	$scope.addressParts = parts;
    	// Create an array of unique types of addresses, by adding types from each result.
    	// Using union ensure unicity
    	var types = [];
    	_.each(parts, function(part) {
    		types = _.union(types, part.types);
    	});
    	$scope.addressTypes = types;

    	// Listen to changes on filter and filter parts accordingly
    	// $watch will be discussed at a later stage
    	$scope.$watch('addressFilter', function(nv, ov){
    		console.debug('Address filter changed from ' + ov + ' to ' + nv);
    		// filter parts
    		if(nv){
    			$scope.addressParts = _.filter(addressParts, function(part) {
	    			return _.contains(part.types,nv);
	    		});
    		}
    	});
    });
  });
