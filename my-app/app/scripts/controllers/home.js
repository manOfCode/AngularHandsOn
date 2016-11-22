angular.module("mainapp")
	.controller("home", HomeFunc);

function HomeFunc($scope, $http, $sce) {
	$scope.message = "Home Page";
	console.log("Inside MainFunc");

	$scope.getTime = function() {
	$http.get('/my-app/api/time').then(function(response) {
		$scope.curtime = response.data.curtime;
	}, function(errorData) {
		$scope.curtime = "Unknown";
	});
	}

	//$scope.todos = [], $scope.errorMessage = null;
	$scope.getTodos = function() {
		var promise = $http.get ('slim/todos');
		console.log("Getting Todos");
		promise.then( function(response, status, headers, config) {
			$scope.todos = response.data;
			console.log("Todos : " + $scope.todos);
			$scope.showTodos = true;
		}, function(data, status, headers, config) {
			$scope.errorMessage = $sce.responseData;
		});
	}
}

