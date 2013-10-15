'use strict';

describe('Controller: LazyCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularBasicsApp'));

  var LazyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LazyCtrl = $controller('LazyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
