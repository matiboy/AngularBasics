'use strict';

angular.module('AngularBasicsApp')
  .directive('clock', function () {
    return {
      template: '<div><span ng-bind="hour"></span><span ng-bind="separator"></span><span ng-bind="minute"></span><span ng-bind="separator"></span><span ng-bind="second"></span></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.hour = 3;
        scope.minute = 35;
        scope.second = 22;
        scope.separator = ':';
      }
    };
  });
