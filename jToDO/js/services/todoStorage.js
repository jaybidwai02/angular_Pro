app.value('toDoLocalstorageId','todoList');

app.factory('todoStorage',['toDoLocalstorageId','$q','$timeout',function(toDoLocalstorageId,$q,$timeout){
	var LOCAL_STORAGE_ID = toDoLocalstorageId;
	//console.log(LOCAL_STORAGE_ID);
	var saveTaskToLocalStorage = function(tasks){
		localStorage.setItem(LOCAL_STORAGE_ID,JSON.stringify(tasks));
	};

	var getTaskFromLocalStorage = function(){
		return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID || '[]'));
	};

	var returnObj = {
		todo : [],

		insert: function(task){
			var waitTill = $q.defer();
			this.todo.push(task);
			saveTaskToLocalStorage(this.todo);
			waitTill.resolve(this.todo);

			return waitTill.promise;
		},

		getStoredTasks:function(){
			var waitTill = $q.defer();
			try{
				angular.copy(getTaskFromLocalStorage(),returnObj.todo);
				waitTill.resolve(returnObj.todo);
			}catch(e){}

			return waitTill.promise;
		},

		put:function(task, index){
			var waitTill = $q.defer();

			this.todo[index] = task;
			saveTaskToLocalStorage(this.todo);

			waitTill.resolve(this.todo);
			return waitTill.promise;
		},

		delete:function(task){
			var waitTill = $q.defer();

			this.todo.splice(this.todo.indexOf(task),1);
			saveTaskToLocalStorage(this.todo);

			waitTill.resolve(this.todo);

			return waitTill.promise;
		},

		clearTasks: function(){
			var waitTill = $q.defer();

			var completedTasks = [],incompleteTasks = [];
			this.todo.forEach(function(task){
				if(task.completed){
					completedTasks.push(task);
				}else{
					incompleteTasks.push(task);
				}
			});

			angular.copy(incompleteTasks,this.todo);
			saveTaskToLocalStorage(this.todo);

			waitTill.resolve(this.todo);
			return waitTill.promise;
		}
	}
	return returnObj;
}]);