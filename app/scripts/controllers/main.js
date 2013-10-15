'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.now = moment();
  });
