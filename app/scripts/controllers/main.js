'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, Userservice) {
  	// Initialize
  	this.loggedIn = Userservice.isLoggedIn;

  	// Set up listeners
    $scope.$on(Userservice.events.LOGGED_IN, _.bind(function(e, username) {
    	this.loggedIn = true;
    	this.username = username;
    }, this));

    $scope.$on(Userservice.events.LOGGED_OUT, _.bind(function(e) {
    	this.loggedIn = false;
    }, this));

    $scope.$on(Userservice.events.USERNAME_CHANGED, _.bind(function(e, randomWord, nv) {
    	console.log('Username change recorded in main ', randomWord, nv);
    	this.username = nv;
    	e.stopPropagation();
    }, this));
  });
