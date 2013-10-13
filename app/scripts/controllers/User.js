'use strict';

angular.module('AngularBasicsApp')
  .controller('UserCtrl', function ($scope, Userservice) {
    this.isLoggedIn = Userservice.isLoggedIn;
    $scope.credentials = {
    	username: '',
    	password: ''
    };
    this.login = _.bind(function() {
    	Userservice.login($scope.credentials).then(_.bind(function(username) {
    		this.isLoggedIn = true;
    		$scope.$root.$broadcast(Userservice.events.LOGGED_IN, username);
    	}, this));
    }, this);

    this.logout = _.bind(function() {
    	Userservice.logout().then(_.bind(function() {
    		this.isLoggedIn = false;
    		$scope.$root.$broadcast(Userservice.events.LOGGED_OUT);
    	}, this));
    }, this);

    $scope.$on(Userservice.events.USERNAME_CHANGED, function(e, lala, newName) {
    	console.error('This scope isnt in the same branch as the UserEdit, will not trigger', lala, newName);
    });
  });
