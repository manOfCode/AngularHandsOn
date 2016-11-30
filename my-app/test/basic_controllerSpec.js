describe("Basic Controller"), function() {
	beforeEeach(module('myModule'));
	var ctrl;
	beforeEeach(inject(function($controller){
		ctrl = $controller('myCtrl');
	}))
	describe("myCtrl", function(){
		it("Should have location value as New York", function() {
			expect(ctrl.location).toBe("New York");
		})
	})
	describe("myCtrl", function(){
		it("Should have location value as Smith", function() {
			expect(ctrl.name).toBe("Smith");
		})
	})
})