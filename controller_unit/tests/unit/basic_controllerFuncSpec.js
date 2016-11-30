describe("Basic Controller", function() {
    beforeEach(module('addModule'));
    var ctrl;
    beforeEach(inject(function($controller){
        scope = {};
        ctrl = $controller('AddCtrl', {$scope:scope});
    }))
    describe("AddCtrl", function(){
        it("Should add 3 and 2 to give 5", function() {
            expect(scope.add(2,3)).toBe(5);
        })
        // it("Should have location value as Smith", function() {
        //     expect(ctrl.name).toBe("Smith");
        // })
    })
})