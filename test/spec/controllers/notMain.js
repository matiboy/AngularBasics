'use strict';

describe('Controller: NotmainCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularBasicsApp'));

  var NotmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotmainCtrl = $controller('NotmainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
