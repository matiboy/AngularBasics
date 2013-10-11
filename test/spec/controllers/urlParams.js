'use strict';

describe('Controller: UrlparamsCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularBasicsApp'));

  var UrlparamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UrlparamsCtrl = $controller('UrlparamsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
