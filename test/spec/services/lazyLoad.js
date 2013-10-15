'use strict';

describe('Service: lazyLoad', function () {

  // load the service's module
  beforeEach(module('AngularBasicsApp'));

  // instantiate service
  var lazyLoad;
  beforeEach(inject(function (_lazyLoad_) {
    lazyLoad = _lazyLoad_;
  }));

  it('should do something', function () {
    expect(!!lazyLoad).toBe(true);
  });

});
