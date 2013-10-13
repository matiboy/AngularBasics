'use strict';

angular.module('AngularBasicsApp')
  .controller('UsereditCtrl', function ($scope, Userservice) {
  	// All scopes that listen to the broadcasted event receive it
    $scope.$on(Userservice.events.LOGGED_IN, function(e, username) {
    	$scope.username = username;
    });

    $scope.randomNumbers = [];

    $scope.addNumber = function() {
    	$scope.randomNumbers.push(Math.random());
    }

    // Random numbers is still the same array when we push
    $scope.$watch('randomNumbers', function(newValue, oldValue, scope) {
    	console.log('This won t work beyond initialisation');
    });
    $scope.$watch('randomNumbers', function(newValue, oldValue, scope) {
    	console.log('This checks for equality');
    }, true);

    // Watch this model for changes and inform the parent of changes
    $scope.$watch('username', function(nv){
    	if(nv){
    		// Pass as many parameters as you want
    		$scope.$emit(Userservice.events.USERNAME_CHANGED, 'lala', nv);
    	}
    });
  });
