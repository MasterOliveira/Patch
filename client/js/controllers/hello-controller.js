app.controller('helloController', ['$scope','$resource', 
		function($scope, $resource) {

			var Target = $resource('/api/targets/:id',{id: "@_id"});

			Target.query(function(results) {
				$scope.targets = results;
			});

			$scope.helloTarget = "World";
			$scope.targets = [];

			$scope.addTarget = function() {
				var target = new Target();
				target.name = $scope.targetName;

				target.$save(function(result){
					$scope.targets.push(result);
				});
			}

			$scope.removeTarget = function(targetIndex) {
				$scope.targets[targetIndex].$delete(function(result){
					$scope.targets.splice(targetIndex,1);
				});
			}

		}
	]);

