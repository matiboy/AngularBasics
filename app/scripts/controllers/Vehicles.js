'use strict';

angular.module('AngularBasicsApp')
  .controller('VehiclesCtrl', function ($scope) {
    this.items = [
      'Cars',
      'Planes',
      'Trains'
    ];

    this.showDetails = function() {
    	window.alert('Vehicle details');
    }
  });
