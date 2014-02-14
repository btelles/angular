var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      template: "<h1>{{model.message}}</h1>",
      controller: "ViewCtrl",
      resolve: {
        loadData: viewCtrl.loadData
      }
    })
});

var appCtrl = app.controller('AppCtrl', function($rootScope) {
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
    console.log(rejection);
  })
})
var viewCtrl = app.controller('ViewCtrl', function($scope, $route) {
  $scope.model = { message: "I'm a great app " + $route.current.locals.loadData};
});

viewCtrl.loadData = function($q, $timeout) {
  var defer = $q.defer();
  $timeout( function() {
    console.log("hello");
    defer.reject("Hi there");
  }, 2000);
  return defer.promise;
}
