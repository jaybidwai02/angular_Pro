var app = angular.module('extApp',[]);

app.controller('HomeController',['$scope','$timeout',function($scope,$timeout){
	$scope.data = {};

	var updateClock = function(){
		$scope.data.time = new Date();

		$timeout(updateClock,1000);
	};

	updateClock();
}])