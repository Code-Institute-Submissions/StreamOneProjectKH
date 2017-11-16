angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Kingdom Hearts 3 News!";
	})
	.controller('newsletterController', function($scope){
		$scope.signupUser = {};

		$scope.submitForm = function() {
			if($scope.signupForm.$valid){
				$scope.signupUser.firstName = $scope.user.firstName;
				$scope.signupUser.lastName = $scope.user.lastName;
				$scope.signupUser.email = $scope.user.email;
				$scope.signupUser.recieve = $scope.user.recieve;
			}
		}
		$scope.submitted = function(){
			if($scope.user.recieve){
				alert("Thank you for selecting that you would like to contribute, we'd love for you to be a part of our team " + $scope.signupUser.firstName + "!");
			}
			else{
				alert("Thank you for signing up " + $scope.signupUser.firstName + " we will notify you when new information comes out!");
			}
		}
	})
	.controller('charactersController', function($scope){

	})
	.controller('blogController', function($scope){
		
	})
	.controller('mediaController', function($scope){
		
	})
	.controller('trailerController', function($scope){
		$scope.reveal = false;
		$scope.toggle = function(){
			$scope.reveal = !$scope.reveal;
		}
	})
	.controller('audioController', function($scope){
		$scope.reveal = false;
		$scope.toggle = function(){
			$scope.reveal = !$scope.reveal;
		}
	});