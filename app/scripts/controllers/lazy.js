'use strict';

angular.module('AngularBasicsApp')
  .controller('LazyCtrl', function ($scope, Lazyload, Mapservice) {
    $scope.lastAddress = Mapservice.current();
  });
