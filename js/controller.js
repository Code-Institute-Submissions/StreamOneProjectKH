angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Testing for kingdom hearts news";
	})
	.controller('newsletterController', function($scope){
		$scope.signupUser = {};

		$scope.submitForm = function() {
			if($scope.signupForm.$valid){
				$scope.signupUser.username = $scope.user.username;
				$scope.signupUser.password = $scope.user.password;
			}
			console.log($scope.signupUser.username + " " + $scope.signupUser.password);
		}
	});