describe('app', function() {
  var element, $scope;

  beforeEach(module('app'));
  beforeEach(inject( function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element("<div eh-simple>{{2+2}}</div>")
    $compile(element)($rootScope);
  }));

  it('eh-simple', function() {
    expect(element.hasClass('my-new-class')).toEqual(true);
  });
});
