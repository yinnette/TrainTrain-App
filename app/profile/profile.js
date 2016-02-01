'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl'
  });
  $routeProvider.when('/profile-schedule', {
    templateUrl: 'profile/profile-schedule.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', [ '$scope', function($scope) {




	$scope.posts = [
		{ 
			image : '5.jpg', 
			trophies : '6', 
			trainer : 'RocksTraining', 
			gym : 'YouFit Gym',
			location : 'Tampa, FL', 
			date : '12/14/15',
			comments : [ 
				{
					user: 'Rockhard_Abz',
					comment : 'Wow, keep rocking on! This is what i need to start doing. ', 
					url: ''
				},
				{
					user: 'abby_workz',
					comment : 'Love the shorts',
					url: ''
				}			
			]
		},
		{ 
			image : '4.jpg', 
			trophies : '25', 
			trainer : 'GymHead', 
			gym : 'LA Fitness Gym',
			location : 'Tampa, FL', 
			date : '12/16/15',
			comments : [ 
				{
					user: 'Jennie03',
					comment : 'I cant believe this is an actual lunge.', 
					url: ''
				},
				{
					user: 'henUkdn34_2',
					comment : 'Where is that @louis30',
					url: ''
				},
				{
					user: 'dsfdwe',
					comment : 'veefe',
					url: ''
				}			
			]
		}
	],

	$scope.myprofile = [
		{ 
			name : 'yinnette', 
			level : '2', 
			location : 'Tampa', 
			crew : [ 
				{
					user : 'Rockhard_Abz',
					user : 'rockerAbs10'
				}		
			]
		}
	],

	$scope.viewOptions = "thumbnails";
	$scope.changeView = function(){
		if ($scope.viewOptions === "thumbnails")
			$scope.viewOptions = "list";
		else
			$scope.viewOptions = "thumbnails";
	};





	// other functions need to be built like 
	// figuring out how long ago something was posted i.e. 1 day ago 1 week ago 1 month ago 2 months ago etc


}]);