var app = angular.module('myApp', []);

app.controller("AppCtrl", function($scope) {});

app.directive('employees', function() {
  return {
    restrict: 'E',
    transclude: true,
    template:
      '<div class="panel">' +
        "<p ng-transclude></p>"
      '</div>'
  }
});

