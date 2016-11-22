angular.module("mainapp")
	.controller("main", MainFunc);

function MainFunc($scope) {
	$scope.appName = "Shreeda App";
	$scope.products = [
		{name: "Dairy Milk", price : 40.1, description : "Cool stuff", img : "dairymilk.png"},
		{name: "Mars", price : 30.1, description : "Cool stuff", img : "mars.png"},
		{name: "Bournville", price : 34.1, description : "Cool stuff", img : "Bournville.png"},
		{name: "Kitkat", price : 20.1, description : "Cool stuff", img : "Kitkat.png"}];
}