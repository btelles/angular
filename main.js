var app = angular.module('myApp', []);

app.controller("AppCtrl", function($scope) {});

app.directive('zippy', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: "@"
    },

    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
      }
    },

    template: '<div class="panel">' +
                "<h3 ng-click='toggleContent()'>{{title}}</h3>" +
                "<div ng-show='isContentVisible'>Toggled content</div>" +
              '</div>'
  }
});

