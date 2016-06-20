var app = angular.module('extApp',['ngRoute']);

app.config(function(WeatherProvider,$routeProvider){
	WeatherProvider.setAPI('0ba1879c1c128e8c');

	$routeProvider.when('/',{
		templateUrl:'views/index.html'
	}).when('/setting',{
		templateUrl:'views/setting.html',
		controller:'SettingController'
	}).otherwise({
		redirectTo:'/'
	});

})

app.controller('HomeController',['$scope','$timeout','Weather','UserService',function($scope,$timeout,Weather,UserService){
	$scope.data = {};

	var updateClock = function(){
		$scope.data.time = new Date();
		$timeout(updateClock,1000);
	};

	updateClock();

	$scope.weather = {};

	$scope.user = UserService.user;
console.log($scope.user);
	Weather.getWeatherForecast($scope.user.location).then(function(data){
		$scope.weather.forecast = data;
	});

	//console.log($scope.user);
}]);

app.controller('SettingController',['$scope','UserService',function($scope,UserService){
	$scope.user = UserService.user;
	console.log($scope.user);

	$scope.save = function(){
		UserService.save();
	}


	var a = {};
	

	var b = {};

	a = b;
	a.val = 10;

	console.log(b);
}])