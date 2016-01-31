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
			'postImage' : '1.jpg', 
			'postTrophies' : '5', 
			'postComments' : [ 
					'Wow, Thats Awesome!', 
					'Wow, Thats Cool!'
				 ], 
			'postTrainer' : 'RocksTraining', 
			'postGym' : 'YouFit Gym',
			'postLocation' : 'Tampa, FL', 
			'postDate' : '12/14/15' 
		},
		{'postImage' : '2.jpg', 'postTrophies' : '23','postTrainer' : 'The_Body_Builder'}, 
		{'postImage' : '3.jpg', 'postTrophies' : '167'}, 
		{'postImage' : '4.jpg', 'postTrophies' : '80'},
		{'postImage' : '5.jpg', 'postTrophies' : '45'},
		{'postImage' : '6.jpg', 'postTrophies' : '67'},
		{'postImage' : '7.jpg', 'postTrophies' : '78'},
		{'postImage' : '8.jpg', 'postTrophies' : ''},
		{'postImage' : '9.jpg', 'postTrophies' : '1234'},
		{'postImage' : '10.jpg', 'postTrophies' : '232'},
		{'postImage' : '11.jpg', 'postTrophies' : '867'},
		{'postImage' : '12.jpg', 'postTrophies' : '968'},
		{'postImage' : '13.jpg', 'postTrophies' : '3984'},
		{'postImage' : '14.jpg', 'postTrophies' : '46'},
		{'postImage' : '15.jpg', 'postTrophies' : '34'}
	],

	$scope.profile = [
		{
			'userName' : 'yinnette', 
			'userLevel' : '2', 
			'userLocation' : 'Tampa', 
			'userCrew' : 'TheBunch'

		}
	]


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