'use strict';

angular.module('AngularBasicsApp')
  .controller('SubmainCtrl', function ($scope) {
    $scope.middleLevel = function() {
    	alert('Is one up from here');
    }

    $scope.lowestLevel = function() {
    	alert('Only visible from the bottom');
    }
  });
