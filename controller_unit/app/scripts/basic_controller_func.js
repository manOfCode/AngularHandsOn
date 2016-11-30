var myModule = angular.module('addModule', []);
	myModule.controller('AddCtrl', ['$scope',function ($scope) {
		$scope.add = function(a,b){
			return a+b;
		}
		$scope.name = "sumit";
		}]);