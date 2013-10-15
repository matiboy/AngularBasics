'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, Mapservice, MapserviceErrors) {
  	$scope.search = Mapservice.current();
  	$scope.$watch('search', _.debounce(function(nv) {
  		// Watches are called once on creation, ignore
  		if(nv){
  			// Remember current value
  			Mapservice.current(nv);
  			Mapservice.locate(nv).then(function(results){
  				console.log(nv, Mapservice.current());
  				// Check that this is still the current value
  				if(nv === Mapservice.current()) {
  					$scope.results = results;
  				}
  			}, function(code) {
  				var s = code.status;
  				if(s === MapserviceErrors.NO_RESULT) {
  					alert('No result...');
  				} else if(s === MapserviceErrors.NO_INTERNET) {
  					alert('No internet connection');
  				} else {
  					alert('Unknown error');
  				}
  			});
  		}
  	}, 500) );
  });
