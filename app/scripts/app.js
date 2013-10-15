'use strict';

angular.module('AngularBasicsApp', ['ngRoute', 'GMaps'])
  .config(function ($routeProvider, GMapsServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lazy', {
        templateUrl: 'views/lazy.html',
        controller: 'LazyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    GMapsServiceProvider.setBaseUrl('maps.google.com/');
  }).run(function(GMapsService){
    console.log(GMapsService.baseUrl);
  });
