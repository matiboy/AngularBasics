'use strict';

angular.module('AngularBasicsApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/notMain', {
        templateUrl: 'views/notMain.html',
        controller: 'NotmainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('AppCtrl', function($rootScope) {
    // Note: Always consider whether you need to crowd the $rootScope or whether a service could do the job cleanly
    $rootScope.pyramidCap = function() {
      alert('Always there...');
    }
  });
