	var myModule = angular.module('getModule', []);

	myModule.controller('MyCtrl', function ($scope,$http,$sce) {
		$scope.todos = [];
		$scope.errorMsg = null;
		$scope.callServer = function() { 
			$http.post('server.php', {params: {id: '5'}
		}).success(function(data, status, headers, config) {
			$scope.todos = data;
		}).error(function(data, status, headers, config) {
			$scope.errorMsg = $sce.trustAsHtml(data);
		});
	};
});