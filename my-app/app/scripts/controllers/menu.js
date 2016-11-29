angular.module("mainapp")
	.controller("external", ExtFunc)
	.directive("myMenu", MenuFunc);

function ExtFunc($scope, $element, $attrs, $transclude) {
	$transclude(function(tagInnerData) {
		var menuString = tagInnerData.text();
		var menuArray = menuString.split(',');
		var a = angular.element('<menu>');
		var menuHtml = '<ul class="nav nav-pills">';
		for (var i = 0; i < menuArray.length; i++) {
			var singleItem = '<li><a  class="myMenuItem" href="#'+ menuArray[i].toLowerCase() + '">' + menuArray[i] + '</a></li>';
			menuHtml+=singleItem;
		}
		menuHtml+='</ul>';
		console.log("Created element " + menuHtml);
		a.html(menuHtml);
		$element.append(a);
});}

function MenuFunc(){
	return {
		restrict: "EA",
		template: "",
		replace: true,
		transclude: true,
		controllerAs: 'controllerOb',
		controller: 'external'
	};
}