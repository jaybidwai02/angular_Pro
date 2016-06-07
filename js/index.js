var app = angular.module('myApp',[]);

app.controller('myCtr',['$scope',function($scope){
	$scope.opt = [
	{
		id:1,
		name:'JAY',
		lname:'Bidwai'
	},
	{
		id:2,
		name:'Anup',
		lname:'Bidwai'
	},
	{
		id:3,
		name:'Pratik',
		lname:'pad'
	},
	{
		id:3,
		name:'Prachi',
		lname:'pad'
	}
	];

	$scope.sel = $scope.opt[0];
}]);