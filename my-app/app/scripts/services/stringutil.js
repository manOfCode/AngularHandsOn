var stringUtilService = angular.module('stringUtilService', []);
stringUtilService.service( 'wordService', function() {
this.getHexa = function (x) {
    //return x.toString(16);
    return "Well!";
}
this.reverseString = function(str) {
  if (str === "")
    return "";
  else
    return this.reverseString(str.substr(1)) + str.charAt(0);
}
this.capitalize = function(str) {
	return str.replace(/\b\w/g, l => l.toUpperCase());
}
});

//WTF?
stringUtilService.provider( 'word', function() {
	console.log("Provider1");
	this.name = "Default";
	this.age = 100;
this.$get = function() {
	console.log("Provider2");
	var name = this.name;
	var age = this.age + 1;
	return {
		sayHello: function() {
			console.log("Provider4");
			return "Hey " + name + "! You are " + age + "??"
		}
	};
};

	this.setName = function (name) {
		console.log("Provider5");
		this.name = name;
	};

	this.setAge = function(age) {
		console.log("Provider6");
		this.age = age;
	};

});
stringUtilService.config(function(wordProvider){
	wordProvider.setName("Shreeda");
	wordProvider.setAge(28);
});