var serviceExample = angular.module('serviceExample', []);
	serviceExample.service('wordService', function() {
		this.reverseWord = function(input) {
			var result = "";
			input = input || "";
			for (var i=0; i<input.length; i++) {
				result = input.charAt(i) + result;
			}
			return result;
		}
		this.capitalize = function(input){
			console.log(input);
			return input.toUpperCase();
		}
	});
	serviceExample.controller('MyCtrl' ,function ($scope, wordService) {
		$scope.reversename = wordService.reverseWord($scope.name);
		$scope.$watch('name',function(oldVal,newVal){
			$scope.reversename = wordService.reverseWord($scope.name);
		})
		$scope.capitalizeName = function(){
			$scope.reversename = wordService.capitalize($scope.reversename);
		}
	});