'use strict';

angular.module('trainTrain.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl'
  }),
  $routeProvider.when('/profile-schedule', {
    templateUrl: 'profile/profile-schedule.html',
    controller: 'ProfileCtrl'
  }), 
  $routeProvider.when('/profile-meal', {
    templateUrl: 'profile/profile-meal.html',
    controller: 'ProfileCtrl'
  }),
  $routeProvider.when('/profile-location', {
    templateUrl: 'profile/profile-location.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', [ '$scope', '$http', function($scope, $http) {
	
	$http.get('json/posts.json').success(function(data){
		$scope.posts = data;
	}),
	$http.get('json/profile.json').success(function(data){
		$scope.myprofile = data;
	}),
	$http.get('json/meals.json').success(function(data){
		$scope.meals = data;
	}),
	$http.get('json/checkins.json').success(function(data){
		$scope.checkins = data;
	}),
	$http.get('json/schedule.json').success(function(data){
		$scope.schedule = data;
	}),




	$scope.viewOptions = "thumbnails";
	$scope.changeView = function(){
		if ($scope.viewOptions === "thumbnails")
			$scope.viewOptions = "list";
		else
			$scope.viewOptions = "thumbnails";
	};

	var limitToComments = 4 ;
	$scope.limit = limitToComments;
	$scope.limitTo = function(){
		if ($scope.limit <= limitToComments)
			$scope.limit = 3 ;
		else
			$scope.limit = limitToComments + 1000000;
	};

 

	// other functions need to be built like 
	// figuring out how long ago something was posted i.e. 1 day ago 1 week ago 1 month ago 2 months ago etc


}]);