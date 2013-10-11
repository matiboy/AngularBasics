'use strict';

angular.module('AngularBasicsApp')
  .controller('ProvidingstuffCtrl', function ($scope, $route) {
    $scope.address = $route.current.locals.address.data.results[0];
    $scope.timer = $route.current.locals.timer;
  });
