var app = angular.module('myApp', []);

app.controller("DrinkCtrl", function($scope) {
  $scope.logChore = function(chore) {
    alert(chore + ' is done!')
  };
});

app.directive('drink', function() {
  return {
    restrict: 'E',
    scope: {
      flavor: '='
    },
    template: '<input type="text" ng-model="flavor">'
  }
});

