// Learning Object oriented JS
var ob = new Object();
ob.name = "Shreeda";
ob.sayName = function() {
	alert(this.name);
};

ob.sayName();



function outerFunction() {
	alert ('Outside');
	function innerFunction() {
		alert('Inside');
	}
	alert(innerFunction);
	innerFunction();
	
};

outerFunction();


function Hero(name, work) {
	var password = '123';
	this.name = name;
	this.work = work;
	this.showDetails = function() {
		alert(this.name);
		alert(this.work);
	}
}

var spidey = new Hero("Spidey", "Flying");
spidey.showDetails();