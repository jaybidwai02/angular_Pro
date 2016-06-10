var app = angular.module('todo',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'views/index.html',
		controller:'todoCtr'
	})
}])