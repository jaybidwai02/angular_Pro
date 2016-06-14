app.controller('todoCtr',['$scope','todoStorage','$routeParams','$filter',function($scope,todoStorage,$routeParams,$filter){

	$scope.todoTask = '';
	$scope.showTask = false;
	var todo = $scope.todo = todoStorage.todo;
	todoStorage.getStoredTasks().then(function(){
		//console.log(11111);
		$scope.showTask = true;
	});

	//watch task list
	$scope.$watch('todo',function(){
		$scope.taskCount = $filter('filter')(todo,{completed:false}).length;
		//console.log($scope.taskCount);
	},true);


	//filter task acording to route
	$scope.$on('$routeChangeSuccess',function(){
		var status = $scope.status = $routeParams.status || '';
		$scope.taskFilter = ( status == 'active' ) ? {completed:false} : ( status == 'completed' ) ? { completed: true } : {};
	})

	$scope.addTask = function(){
		$scope.inserting = true;

		var newTask = {
			title: $scope.todoTask,
			completed:false
		}

		if(!newTask.title) return;

		todoStorage.insert(newTask).then(function success(){
			$scope.todoTask = '';
			$scope.inserting = false;
			console.log(window.localStorage)
		})
	};

	$scope.isComplete = function(task, markComplete){
		if(angular.isDefined(markComplete)){
			task.completed = markComplete;
		}
		todoStorage.put(task, todoStorage.todo.indexOf(task)).then(function sucess(){}, function error(){
			task.completed = !task.completed;
		})
	};

	$scope.markAll = function(markComplete){
		todo.forEach(function(task){
			if(task.completed != markComplete){
				$scope.isComplete(task, markComplete);
			}
		})
	};

	$scope.deleteTask = function(task){
		todoStorage.delete(task);
	};

	$scope.clearCompletedTasks = function(){
		todoStorage.clearTasks();
	}
}]);