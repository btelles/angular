var app = angular.module('myApp', []);

app.controller("DrinkCtrl", function($scope) {
  $scope.drinkUpMyFriend = function(someDrink) {
    alert(someDrink + ' has been drunk!')
  };
});

app.directive('drink', function() {
  return {
    restrict: 'E',
    scope: {
      action: '&'
    },
    template: '<input type="text" ng-model="value">' +
              "<div class=\"button\" ng-click=\"action({someDrink:value})\">Drink it.</div>"
  }
});

