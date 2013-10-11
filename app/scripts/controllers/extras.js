'use strict';

angular.module('AngularBasicsApp')
  .controller('ExtrasCtrl', function ($scope, $route) {
    $scope.title = $route.current.title;
    $scope.subtitle = $route.current.subtitle;
  });
