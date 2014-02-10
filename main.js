var app = angular.module('myApp', []);

app.controller("AppCtrl", function($scope) {});

app.directive('dumbPassword', function() {

  var validElement = angular.element("<div>{{model.input}}</div>");

  this.link = function(scope) {
    scope.$watch("model.input", function(value) {
      if (value === 'password') {
        validElement.toggleClass('alert-box alert')
      }
    });
  }

  return {
    restrict: 'E',
    replace: true,
    compile: function(tElem) {
      tElem.append(validElement)
      return link;
    },

    templateUrl: 'zippy.html'
  }
});



