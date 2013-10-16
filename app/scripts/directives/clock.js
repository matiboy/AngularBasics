'use strict';

angular.module('AngularBasicsApp')
  .directive('clock', function () {
    return {
      templateUrl: 'template/clock/clock.html',
      restrict: 'E',
      scope: {
        tz: '&',
        separator: '@'
      },
      link: function postLink(scope, element, attrs) {
        var period = attrs.period || 1000;
        // Change to (new?) $interval service
        setInterval(function() {
          var now = moment().add('h', scope.tz());
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
