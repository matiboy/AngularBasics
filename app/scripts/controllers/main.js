'use strict';

angular.module('AngularBasicsApp')
  .controller('MainCtrl', function ($scope, $sce) {
    this.trustedTabs = [];
    this.tabs = [
      {
        title: 'ABC',
        content: 'A<br>B<br>C'
      },
      {
        title: 'EDF',
        content: 'D<br>E<br>F'
      }
    ];
    // Un-protect model
    this.jkl = $sce.trustAsHtml('J<br>K<br>L');

    this.addTab = function() {
      this.trustedTabs.push({
        title: this.tab.title,
        content: $sce.trustAsHtml(this.tab.content)
      });
    }

    this.alertMe = angular.bind(window, window.alert, 'You ve selected the select tab');
  });
