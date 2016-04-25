
describe('Task Controller', function () {
	var createController //function which instanciates the controller
	  , $httpBackend //angular mock provider

	//Set up module
	beforeEach(module('app'));

	beforeEach(inject(function($injector) {
	// Set up the mock http service responses
		$httpBackend = $injector.get('$httpBackend');
		// backend definition common for all tests
		$httpBackend
			.whenRoute('GET', '/api/task')
			.respond([
				{_id: "571d83d08203580a00394af0", name: "list", __v: 0},
				{_id: "571d83d68203580a00394af4", name: "of", __v: 0},
				{_id: "571d83da8203580a00394af5", name: "tasks", __v: 0}
			]);

		// $httpBackend
		// 		.when('POST', '/api/task')
		// 		.respond(
		// 			{__v: 0, name: "new task added", _id: "571e188e0a56d40a00239b07"}
		// 		);

		$httpBackend
			.whenRoute('DELETE', '/api/task')
			.respond(
				{ok: 1, n: 1}
			);

		$httpBackend
			.whenRoute('POST', '/api/task')
			.respond(function(method, url, data, headers, params) {
				var newTask = {};
				newTask.__v = 0;
				newTask._id = "571e188e0a56d40a00239b07";
				newTask.name = JSON.parse(data).name;
				return [200, newTask];
		});

		// The $controller service is used to create instances of controllers
		var $controller = $injector.get('$controller');

		createController = function() {
			return $controller('taskController');
		};
	}));


	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	it('should activate the controller and list tasks', function() {
		var controller = createController();
		$httpBackend.flush();

		expect(controller).to.have.property('tasks').with.length(3);
		expect(controller.tasks[0]).to.have.property('name');
		expect(controller.tasks[0].name).to.equal('list');
	});

	it('should add a new task to tasks list', function() {
		var controller = createController();
		$httpBackend.flush();

		var originalListLength = controller.tasks.length

		controller.taskName = "new t";
		controller.addTask();
		$httpBackend.flush();

		expect(controller).to.have.property('tasks').with.length(originalListLength+1); 
		expect(controller.tasks[3]).to.have.property('name');
		expect(controller.tasks[3].name).to.equal(controller.taskName);
		expect(controller.tasks[3]).property('__v');
		expect(controller.tasks[3]).property('_id');
	});

	it('should delete a given task from tasks list', function() {
		var controller = createController();
		$httpBackend.flush();

		var originalListLength = controller.tasks.length
		  , taskPosition = 1
		  , task_id = controller.tasks[taskPosition]._id;

		controller.removeTask(taskPosition);
		$httpBackend.flush();

		function taskNotThere(_id,taskList) {
			for (task in taskList) {
				if(task._id === _id) return false;
			}
			return true;
		}

		expect(controller).to.have.property('tasks').with.length(originalListLength-1); 
		expect(taskNotThere(task_id,controller.tasks)).to.be.true;
	});

})