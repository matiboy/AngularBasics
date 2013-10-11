'use strict';

angular.module('AngularBasicsApp')
  .controller('UrlparamsCtrl', function ($scope, $routeParams) {
    $scope.params = [
      $routeParams.id,
      $routeParams.name
    ];
  });
