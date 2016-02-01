(function(){
	'use strict'
	angular
		.module('efficientApp.todo',['ngResource'])
		.controller('todoController', ['$resource', TodoController]);

	function TodoController($resource) {
		var vm = this;

		vm.globalTarget = "World";
		vm.targets = [];

		var Target = $resource('/api/targets/:id',{id: '@_id'});

		Target.query(function(results) {
			vm.targets = results;
		});


		vm.addTarget = function() {
			var target = new Target();
			target.name = vm.targetName;

			target.$save(function(result){
				vm.targets.push(result);
			});
		}

		vm.removeTarget = function(targetIndex) {
			vm.targets[targetIndex].$delete(function(result){
				vm.targets.splice(targetIndex,1);
			});
		}

	}
})();

