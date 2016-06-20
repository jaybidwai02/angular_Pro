var app = angular.module('extApp',[]);

app.config(function(WeatherProvider){
	WeatherProvider.setAPI('0ba1879c1c128e8c');
})

app.controller('HomeController',['$scope','$timeout','Weather',function($scope,$timeout,Weather){
	$scope.data = {};

	var updateClock = function(){
		$scope.data.time = new Date();
		$timeout(updateClock,1000);
	};

	updateClock();

	$scope.weather = {};
	Weather.getWeatherForecast("MH/Mumbai").then(function(data){
		$scope.weather.forecast = data;
	})
}])