'use strict';

angular.module('AngularBasicsApp')
  .service('Lazyload', function Lazyload() {
    console.log('Lazy loaded');
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
