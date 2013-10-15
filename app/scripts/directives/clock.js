'use strict';

angular.module('AngularBasicsApp')
  .directive('clock', function () {
    return {
      template: '<div><span ng-bind="hour"></span><span ng-bind="separator"></span><span ng-bind="minute"></span><span ng-bind="separator"></span><span ng-bind="second"></span></div>',
      restrict: 'E',
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.separator = attrs.separator || ':';
        var period = attrs.period || 1000;
        var tz = attrs.tz || 0;
        // Change to (new?) $interval service
        setInterval(function() {
          var now = moment().add('h', tz);
          scope.hour = now.format('HH');
          scope.minute = now.format('mm');
          scope.second = now.format('ss');
          try {
            scope.$digest();
          } catch(e) {}
        }, period);
      }
    };
  });
