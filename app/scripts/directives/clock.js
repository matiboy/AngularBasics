'use strict';

angular.module('AngularBasicsApp')
  .directive('clock', function () {
    return {
      template: '<div><span ng-bind="hour"></span><span ng-bind="separator"></span><span ng-bind="minute"></span><span ng-bind="separator"></span><span ng-bind="second"></span></div>',
      restrict: 'E',
      scope: {
        tz: '&',
        separator: '@'
      },
      link: function postLink(scope, element, attrs) {
        var period = attrs.period || 1000;
        console.log(scope.tz, scope.separator);
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
  }).directive('saySomethingOnClick', function () {
    return {
      template: '<span class="btn" ng-transclude></span>',
      restrict: 'A',
      transclude: true,
      scope: {
        saySomethingOnClick: '='
      },
      link: function postLink(scope, element, attrs) {
        element.on('click', scope.saySomethingOnClick);
      }
    };
  });
