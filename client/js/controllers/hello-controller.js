
app.controller('helloController', ['$scope','$resource', 
function($scope, $reource) {
	$scope.helloTarget = "world";
	$scope.targets = []

	$scope.addTarget = function() {
		$scope.targets.push({ name: $scope.targetName});
		$scope.targetName = "";
	}

	$scope.removeTarget = function(targetIndex) {
		$scope.targets.splice(targetIndex,1);
	}

}]);

