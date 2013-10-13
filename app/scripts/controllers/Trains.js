'use strict';

angular.module('AngularBasicsApp')
  .controller('TrainsCtrl', function ($scope) {
    this.items = [
      'Steam',
      'Electric',
      'Diesel'
    ];

    // Scope is still alive! Not replaceable for events, watching and inheritance
    $scope.dontForget = function() {
    	alert('Love $scope forever!');
    }

  });
