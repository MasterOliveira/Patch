(function(){
	'use strict';

	angular
		.module('efficientApp')
		.controller('todoController', TodoController);

	TodoController.$inject = ['taskService'];

	function TodoController(taskService) {
		var vm = this;

		vm.globalTarget = "World";
		vm.tasks = [];

		vm.removeTask = removeTask
		vm.addTask = addTask

		activate();

		function activate() {
			listTasks()
			console.debug('TodoController was Activated!')
		}

		function listTasks() {
			taskService.listTasks()
				.then(function(data) {
					vm.tasks = data;
					console.debug(data)
				});
		};

		function addTask() {
			var task = {};
			task.name = vm.taskName;
			
			taskService.addTask(task)
				.then(function(data) {
					vm.tasks.push(data);
					console.debug(data)
				});
				
		};

		function removeTask(taskIndex) {
			var taskId = vm.tasks[taskIndex]._id
			taskService.removeTask(taskId)
				.then(function(data) {
					vm.tasks.splice(taskIndex,1);
					console.debug(data)
				});
		};

	}
})();

