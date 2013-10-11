'use strict';

angular.module('AngularBasicsApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/name', {
        template: 'My name is Bob',
        controller: 'NameCtrl'
      })
      .when('/templated', {
        templateUrl: 'views/templated.html',
        controller: 'TemplatedCtrl'
      })
      .when('/urlParams/:id/:name', {
        templateUrl: 'views/urlParams.html',
        controller: 'UrlparamsCtrl'
      })
      .when('/extras', {
        templateUrl: 'views/extras.html',
        controller: 'ExtrasCtrl',
        title: 'Angular.js',
        subtitle: 'Superheroic JavaScript MVW Framework'
      })
      .when('/providingStuff', {
        templateUrl: 'views/providingStuff.html',
        controller: 'ProvidingstuffCtrl',
        resolve: {
          // WARNING! This is just as an example
          // API calls and such belong in a service!
          address: function($http) {
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=Somerset,%20Kuala%20Lumpur,%20Malaysia&sensor=false');
          },
          timer: function($q, $timeout) {
            var q = $q.defer();
            $timeout(function(){
              q.resolve('Waited 2000ms');
            }, 2000);
            return q.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
