var app = angular.module("testDirective", []);

app.directive("test", function() {
    return function(scope, element) {
        element.addClass("blue");
    }
})