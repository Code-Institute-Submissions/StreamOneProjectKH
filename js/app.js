angular.module('KHApp', ['ngRoute', 'RouteControllers']);

angular.module('KHApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/newsletter', {
		templateUrl: 'templates/newsletter.html',
		controller: 'newsletterController'
	});
});