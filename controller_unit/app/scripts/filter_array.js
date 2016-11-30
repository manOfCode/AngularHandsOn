var app = angular.module('filterArray',[]);
	app.filter('base',function(){
		return function(items){
			var filtered = [];
    for (var i = 0; i < items.length; i++) {
    	var item = items[i];
      // check if the individual Array element is length <4
      if (item.name.length<=5) {
        filtered.push(item);
      }
    } 
       return filtered;
  }
})