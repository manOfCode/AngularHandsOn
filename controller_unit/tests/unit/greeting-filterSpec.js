describe("It should test greeting filter", function(){
	beforeEach(module("greetingFilter"));
	var greetFilter;
	//var customerOb;
	beforeEach(inject(function(_greetFilter_){
		greetFilter = _greetFilter_;
		//customerOb = {};
		console.log(greetFilter);
	}))
	describe("Testing the greeting filter", function(){
		var customers = [{name:'Smith'}, {name:'tiya'}, {name:'Luke'}, {name:'Mac'}];
		var length = customers.length;
		var i;
		for (var i = 0; i < length; i++) {
			//Either let or call "it" as a function
			let customerOb = customers[i];
			console.log(i + " " +customerOb.name);
			it(customerOb.name+" filter test", function(){
				console.log("Inside async testing for value " + customerOb.name);
				expect(greetFilter(customerOb.name)).toBe("Good Morning "+ customerOb.name);
			})
			//Not working!
			// customerOb = customers[i];
			// console.log(i + " " +customerOb.name);
			// (function(Ob){
			// 	it(customerOb.name+" filter test", function(){
			// 	console.log("Inside async testing for value " + customerOb.name);
			// 	expect(greetFilter(customerOb.name)).toBe("Good Morning "+ customerOb.name);
			// })})(customerOb)

		};
	})
}
)