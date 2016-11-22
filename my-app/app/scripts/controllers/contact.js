angular.module("mainapp")
	.controller("contact", ContactFunc);

function ContactFunc($scope) {
	$scope.message = "Contact Page";

}