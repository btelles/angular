var app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider) {
  $routeProvider
    .when('/map/:country/:state/:city', {
      templateUrl: 'app.html',
      controller: 'AppCtrl'
    })
    .when('/pizza', {
      template: "Yum!!!"
    })
    .otherwise( {
      template: "I have no idea where you are" 
    });
})

app.controller('AppCtrl', function($scope, $routeParams) {
  $scope.model = {
    title: 'This is my app!!!',
    message: "And I live in " +
      $routeParams.country + ", " +
      $routeParams.state + ", " +
      $routeParams.city
  }
});
