'use strict';

angular.module('AngularBasicsApp', ['ngRoute', 'ui.bootstrap.tabs'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
