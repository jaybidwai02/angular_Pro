app.controller('todoCtr',['$scope','todoStorage',function($scope,todoStorage){

	$scope.todoTask = '';
	$scope.showTask = false;
	var todo = $scope.todo = todoStorage.todo;
	todoStorage.getStoredTasks().then(function(){
		console.log(11111);
		$scope.showTask = true;
	});

	$scope.addTask = function(){
		$scope.inserting = true;

		var newTask = {
			title: $scope.todoTask
		}

		if(!newTask.title) return;

		todoStorage.insert(newTask).then(function success(){
			$scope.todoTask = '';
			$scope.inserting = false;
			console.log(window.localStorage)
		})
	}
}]);