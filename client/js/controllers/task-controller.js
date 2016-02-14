(function(){
	'use strict'
	angular
		.module('efficientApp.task',['ngResource'])
		.controller('todoController', ['$resource', TodoController]);

	function TodoController($resource) {
		var vm = this;

		vm.globalTarget = "World";
		vm.tasks = [];

		var Task = $resource('/api/task/:id',{id: '@_id'});

		Task.query(function(results) {
			vm.tasks = results;
		});


		vm.addTask = function() {
			var task = new Task();
			task.name = vm.taskName;

			task.$save(function(result){
				vm.tasks.push(result);
			});
		}

		vm.removeTask = function(taskIndex) {
			vm.tasks[taskIndex].$delete(function(result){
				vm.tasks.splice(taskIndex,1);
			});
		}

	}
})();

