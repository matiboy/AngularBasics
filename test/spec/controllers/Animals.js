'use strict';

describe('Controller: AnimalsCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularBasicsApp'));

  var AnimalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimalsCtrl = $controller('AnimalsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
