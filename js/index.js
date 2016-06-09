var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/',{
	templateUrl:'routingViews/_index.html',
	controller:'indexCtr',
	resolve:{
		resData : function(apiRequest){
			return apiRequest.get().then(function(res){
				return res;
			});
		}
	}
}).when('/list/:123',{
redirectTo:'/',
controller:'indexCtr'

}).when('/list',{
	templateUrl:'routingViews/_pageNameList.html',
	controller:'listCtr',
	resolve:{
		getVal:function($q,$timeout){
			var myVal = $q.defer();
			$timeout(function(){
				myVal.resolve('ddddddddd');
					//return 'timeout';
				},1000); 

			return myVal.promise;
		}
	}

})
}]);

app.service('apiRequest',function($http){
	this.get = function(){
		return $http.get('js/ddJson.json');
	}
})

app.controller('myCtr',['$scope','apiRequest',function($scope,apiRequest){
	
	$scope.ddData = {};

		apiRequest.get().then(function(res){
			$scope.ddData.values = res.data;
			$scope.sel = $scope.ddData.values[0];
			//console.log($scope.ddData.values);
		});

}]);

app.controller('indexCtr',['$scope','apiRequest','resData','$routeParams',function($scope,apiRequest,resData,$routeParams){
	console.log($routeParams);
	/*$scope.ddData = {};

	apiRequest.get().then(function(res){
		$scope.ddData.values = res.data;
		$scope.sel = $scope.ddData.values[0];
		//console.log($scope.ddData.values);
	});*/
}]);

app.controller('listCtr',['$scope','$timeout','getVal',function($scope,$timeout,getVal){
	$scope.name = getVal;
}]);

//custom promise created
/*var temp = 0;
var p1 = new Promise(function(resolve,reject){
	window.setTimeout(function(){
		temp = 100;
		resolve(temp);
	},5000);
});

p1.then(function(arg){
	console.log(arg);
})*/