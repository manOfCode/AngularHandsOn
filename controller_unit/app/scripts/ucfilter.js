	var myModule = angular.module('filterModule', []);
	myModule.controller('MyCtrl', function ($scope,$filter) {
		$scope.name = $filter('uppercase')("smith");
		});