angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Kingdom Hearts 3 News!";
	})
	.controller('newsletterController', function($scope){
		$scope.signupUser = {};

		$scope.submitForm = function() {
			if($scope.signupForm.$valid){
				$scope.signupUser.username = $scope.user.username;
				$scope.signupUser.password = $scope.user.password;
				$scope.signupUser.email = $scope.user.email;
			}
			console.log($scope.signupUser.username + " " + $scope.signupUser.password + " " + $scope.signupUser.email);
		}
		$scope.submitted = function(){
			alert("sick one " + $scope.signupUser.username);
		}
	})
	.controller('charactersController', function($scope){

	})
	.controller('blogController', function($scope){
		
	})
	.controller('mediaController', function($scope){
		
	});