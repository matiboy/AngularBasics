'use strict';

angular.module('AngularBasicsApp')
  .controller('NotmainCtrl', function ($scope, $rootScope) {
    // $rootScope can be accessed from any scope or by injection
    console.debug($scope.$root.$id, ' is the same as ', $rootScope.$id);
  });
