//Creating a new angular module, taking app name and injecting
//the dependency arrays ngRoute and RouteControllers
angular.module('KHApp', ['ngRoute', 'RouteControllers']);

angular.module('KHApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); //Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/newsletter', {
		templateUrl: 'templates/newsletter.html',
		controller: 'newsletterController'
	});
});