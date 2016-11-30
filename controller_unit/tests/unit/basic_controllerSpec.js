describe("Basic Controller", function() {
    beforeEach(module('myModule'));
    var ctrl;
    beforeEach(inject(function($controller){
        ctrl = $controller('MyCtrl');
    }))
    describe("MyCtrl", function(){
        it("Should have location value as New York", function() {
            expect(ctrl.location).toBe("New York");
        })
        it("Should have location value as Smith", function() {
            expect(ctrl.name).toBe("Smith");
        })
    })
})
