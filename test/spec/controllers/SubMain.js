'use strict';

describe('Controller: SubmainCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularBasicsApp'));

  var SubmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmainCtrl = $controller('SubmainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
