'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope) {
    this.saySomething = angular.bind(this, function() {
      alert(this.tz);
    });
  });
