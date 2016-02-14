angular
	.module('efficientApp.task',['ngResource'])
	.factory('task', [Task, '$resource'])

function Task($resource) {
	var Task = $resource('/api/task/:id',{id: '@_id'});
}