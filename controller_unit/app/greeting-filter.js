var app = angular.module('greetingFilter',[]);
app.filter('greet',function(){
return function(name){
return 'Good Morning '+name;
}
});