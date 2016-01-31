var app = angular.module("hello", []);

app.controller("helloController", function($scope) {
	$scope.helloTarget = "world";
})