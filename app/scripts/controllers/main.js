'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, Mapservice) {
    $scope.middleLevel = function() {
    	alert('Is right here');
    }
  });
