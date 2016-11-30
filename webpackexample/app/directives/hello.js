export default ngModule => {
	ngModule.directive('hello', () => {
		require ('./hello.css');
		return {
			restrict: 'E',
			scope:{},
			templateUrl: 'directives/hello.html',
			controllerAs: 'hc',
			controller: function() {
				var hc = this;
				hc.msg = "Hello I am loaded via webpack"
			}
		}
	})
}