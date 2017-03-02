'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });

  it('returns the correct value 50', function() {
      var status1 = 25;
      var perc = 25;
      perc = Number(status1) + Number(perc);
      expect(perc).toBe(50);
  });

  
  
});

