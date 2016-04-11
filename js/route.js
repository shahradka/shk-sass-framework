function route (){
var routes = {}; // The routes will be stored here
var add = function(url, action){
 routes[url] = action;
};
var run = function(){
jQuery.each(routes, function(pattern){
if(location.href.match(pattern)){
// "this" points to the function to be executed
this();
}
});
};
	return{
			add: add,
			run: run
	}
}
var r =new route();
r.add('../1.html', function(){
var test = new TeslaModelS();	
	test.first();
});
r.add('../2.html', function(){
var test = new TeslaModelS();
	
	test.second();
});
r.run();
