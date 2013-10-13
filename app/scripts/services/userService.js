'use strict';

angular.module('AngularBasicsApp')
  .service('Userservice', function Userservice($http, $q, $rootScope) {
    var username;
    // Initialize
    var isLoggedIn = false;
	var events = {
    		LOGGED_IN: 'Userservice:LOGGED_IN',
    		LOGGED_OUT: 'Userservice:LOGGED_OUT',
    		USERNAME_CHANGED: 'Userservice:USERNAME_CHANGED'
    	};
	// $rootScope can be accessed from services too
	$rootScope.$on(events.USERNAME_CHANGED, function(e, lala, newName) {
    	console.error('Username change recorded in service', newName);
    });

    return {
    	login: function(credentials){
    		// Fake login via API
    		var q = $q.defer();
    		q.resolve(credentials.username);
    		isLoggedIn = true;
    		return q.promise;
    	},
    	logout: function(){
    		// Fake logout via API
    		var q = $q.defer();
    		q.resolve();
    		isLoggedIn = false;
    		return q.promise;
    	},
    	isLoggedIn: isLoggedIn,
    	events: events
    }
  });
