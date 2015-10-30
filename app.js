(function()
{
	var projectApp = angular.module("projectApp",
	[
		'ngRoute',
		'ngResource',
		'ngAnimate',
		'appControllers',
		'appServices'
	]);

    
	projectApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
	{
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/',
		{
			templateUrl: "index.php",
			controller: "homeController"
		})
		.otherwise(
		{
			redirectTo: '/'
		});
		
	}]);
})();