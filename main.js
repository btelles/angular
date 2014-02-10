var app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app.html',
    controller: 'AppCtrl'
  });
})

app.controller('AppCtrl', function($scope) {
  $scope.model = {
    title: 'This is my app!!!'
  }
});
