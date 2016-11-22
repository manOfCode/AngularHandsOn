angular.module("mainapp")
	.controller("about", AboutFunc);

/*function AboutFunc($scope, wordService) {
	$scope.message = wordService.capitalize("about page");

}*/

function AboutFunc($scope, word) {
	$scope.message = "About : " + word.sayHello();
}