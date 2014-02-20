describe('my application', function() {
  var element, $scope;
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<div>hello world</div>');
    $compile(element)($rootScope);
  }));

  it('says hello World', function() {
    $scope.$digest();
    expect(element.html()).toEqual('hello world');
  });
});
