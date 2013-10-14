'use strict';

angular.module('AngularBasicsApp', ['ngRoute', 'GMaps'])
  .config(function ($routeProvider, GMapsServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    GMapsServiceProvider.setBaseUrl('maps.google.com/');
  }).run(function(GMapsService){
    console.log(GMapsService.baseUrl);
  });
