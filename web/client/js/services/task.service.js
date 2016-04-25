(function() {
    'use strict';

	angular
		.module('app')
		.factory('taskService', taskService);

	taskService.$inject = ['$http'];

	function taskService($http) {
		var name = "taskService";
		var service = {
			listTasks: listTasks, 
			addTask: addTask,
			removeTask: removeTask
		};

		return service

		function listTasks(){
			return $http.get('/api/task')
				.then(listTasksComplete)
				.catch(listTasksFailed);
			
			function listTasksComplete(reponse) {
				return reponse.data;
			}

			function listTasksFailed(error) {
				console.error('listTasks request failed: ' + error.data);
			}
		}

		function addTask(data){
			return $http.post('/api/task',data)
				.then(addTaskComplete)
				.catch(addTaskFailed);
			
			function addTaskComplete(reponse) {
				return reponse.data;
			}

			function addTaskFailed(error) {
				console.error('addTask request failed: ' + error.data);
			}
		}

		function removeTask(taskId){
			return $http.delete('/api/task/'+taskId)
				.then(removeTaskComplete)
				.catch(removeTaskFailed);
			
			function removeTaskComplete(reponse) {
				return reponse;
			}

			function removeTaskFailed(error) {
				console.error('removeTask request failed: ' + error.data);
			}
		}

	};

})();