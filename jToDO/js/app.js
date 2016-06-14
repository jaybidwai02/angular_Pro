var app = angular.module('todo',['ngRoute']);

var routeConfigSettings = {
		templateUrl:'views/index.html',
		controller:'todoCtr'
	};
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',routeConfigSettings)
	.when('/:status',routeConfigSettings)
	.otherwise({redirectTo:'/'})
}])