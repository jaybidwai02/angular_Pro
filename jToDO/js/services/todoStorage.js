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
		}
	}
	return returnObj;
}]);