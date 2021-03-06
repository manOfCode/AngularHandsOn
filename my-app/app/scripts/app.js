var app = angular.module("mainapp", ['ngRoute', 'stringUtilService', 'ngMaterial', 'ngResource']);
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	// Home
	.when("/", {templateUrl: "templates/partials/home.html", controller: "home"})
	//Template 1
	.when("/home", {templateUrl: "templates/partials/home.html", controller: "home"})
	//Template 2
	.when("/about", {templateUrl: "templates/partials/about.html", controller: "about"})
	.when("/contact", {templateUrl: "templates/partials/contact.html", controller: "contact"})
	.when("/products", {templateUrl: "templates/partials/products-page.html", controller: "main"})
	.otherwise({redirectTo : "/error", templateUrl: "templates/partials/error.html", controller: "main"});
	}]);
app.factory('Entry', function($resource){
	return $resource('/api/comments/:id');
});