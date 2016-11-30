describe("Basic Service", function() {
    beforeEach(module('serviceExample'));
    var wordService;
    beforeEach(inject(function(_wordService_){
        wordService = _wordService_;
    }))
    describe("Testing word service", function(){
        it("Should test word service", function() {
            expect(wordService.reverseWord("Shreeda")).toBe("adeerhS");
        })
        // it("Should have location value as Smith", function() {
        //     expect(ctrl.name).toBe("Smith");
        // })
    })
})
