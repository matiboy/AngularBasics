'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, $cookies) {
  	console.debug($cookies);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
