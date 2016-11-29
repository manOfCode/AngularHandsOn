angular.module("mainapp")
	.controller("home", HomeFunc);

function HomeFunc($scope, $http, $sce, Entry) {
	$scope.message = "Home Page";
	console.log("Inside MainFunc");

	$scope.getTime = function() {
	$http.get('/my-app/app/api/time').then(function(response) {
		var date = response.data.curtime;
		$scope.curtime = new Date();
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

	$scope.entries = null, $scope.singleComment = null;
	$scope.id = 12;
	$scope.fetch = function(id) {
		$scope.singleComment = Entry.get({id:$scope.id});
	}
	$scope.deleteComment = function(id) {
		Entry.delete({id:$scope.id});
		alert("Comment Deleted");
	}
	$scope.postBack = function() {
		Entry.save($scope.singleComment, function(){
			alert("Modified Comment successfully");
		})
	}
	$scope.fetchAll = function(){
		$scope.entries = Entry.query();
	}

}

