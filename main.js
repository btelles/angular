var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      template: "<h1>{{model.message}}</h1>",
      controller: "AppCtrl",
      resolve: {
        app: function($q, $timeout) {
          var defer = $q.defer();
          $timeout( function() {
            console.log("hello");
            defer.resolve();
          }, 2000);
          return defer.promise;
        }
      }
    })
});

app.controller('AppCtrl', function($scope) {
  $scope.model = { message: "I'm a great app"};
});
