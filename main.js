var app = angular.module('app', []);

app.directive("country", function() {
  return {
    restrict: "E",
    controller: function() {
      this.makeAnnouncement = function(message) {
        console.log("country says:" + message);
      }
    }
  }
})

app.directive("state", function() {
  return {
    restrict: "E",
    require: ["^country"],
    controller: function() {
      this.makeLaw = function(law) {
        console.log("State passes law:" + law);
      }
    }
  }
})

app.directive("city", function() {
  return {
    restrict: "E",
    require: ["^country", "^state"],
    link: function(scope, element, attrs, ctrls) {
      ctrls[0].makeAnnouncement("from within the city");
      ctrls[1].makeLaw("from within the city");
    }
  }
})
