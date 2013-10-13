'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, Mapservice) {
    $scope.title = 'Hello';
    var addressParts;
    Mapservice.getAddress('Somerset, Kuala Lumpur, Malaysia').then(function(parts) {
    	console.debug('Received parts for address: ', parts);
    	addressParts = parts;
    	$scope.addressParts = parts;
    });
  });
