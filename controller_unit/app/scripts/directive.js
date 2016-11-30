var moduleRef = angular.module("directiveModule",[]);
moduleRef.directive("testDirective",function(){
	return{
	restrict: "EA",
  replace:true,
	scope:{
	peace:"="
	},
	link:linkfunc
	}
	function linkfunc(scope,element){
		element.addClass("fun");
		element.bind('click',function(){
			alert("hey i am clicked");
			console.log("inside link function"+ scope.peace.greeting);
			scope.clicked = true;
			scope.peace.greeting = "Hello All";
		})
		
	}
})
moduleRef.controller("MainCtrl",function($scope){
	$scope.data = {greeting:"Hio"};
})