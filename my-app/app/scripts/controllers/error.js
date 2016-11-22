angular.module("mainapp")
	.controller("error", ErrorFunc);

function ErrorFunc($scope) {
	$scope.message = "Error! Page not found!";

}