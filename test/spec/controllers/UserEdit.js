'use strict';

describe('Controller: UsereditCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularBasicsApp'));

  var UsereditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsereditCtrl = $controller('UsereditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
