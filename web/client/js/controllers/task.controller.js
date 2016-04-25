(function(){
	'use strict';

	angular
		.module('app')
		.controller('taskController', TaskController);

	TaskController.$inject = ['taskService'];

	function TaskController(taskService) {
		var vm = this;

		vm.globalTarget = "World";
		vm.tasks = [];

		vm.activate = activate
		vm.removeTask = removeTask
		vm.addTask = addTask

		activate()

		///////////
		
		function activate() {
			console.debug('TaskController activating...')
			listTasks()
		}

		function listTasks() {
			taskService.listTasks()
				.then(function(data) {
					vm.tasks = data;
				});
		};

		function addTask() {
			var task = {};
			task.name = vm.taskName;
			
			taskService.addTask(task)
				.then(function(data) {
					vm.tasks.push(data);
				});
				
		};

		function removeTask(taskIndex) {
			var taskId = vm.tasks[taskIndex]._id
			taskService.removeTask(taskId)
				.then(function(data) {
					vm.tasks.splice(taskIndex,1);
				});
		};

	}
})();

