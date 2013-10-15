'use strict';

angular.module('AngularBasicsApp')
  .controller('LazyCtrl', function ($scope, Lazyload) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
