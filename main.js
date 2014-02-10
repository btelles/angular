var app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider) {
  $routeProvider
    .when('/map/:country/:state/:city', {
      templateUrl: 'app.html',
      controller: 'AppCtrl'
    })
    .when('/pizza/:crust/:toppings', {
      template: "Yum!!!",
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams);
        console.log(path);
        console.log(search);
        return '/' + routeParams.crust
      }
    })
    .when('/deep', {
      template: 'Deep dish'
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
