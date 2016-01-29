'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
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
		},
		
		{'postImage' : '2.jpg', 'postTrophies' : '23' }, 
		{'postImage' : '3.jpg', 'postTrophies' : '167' }, 
		{'postImage' : '4.jpg', 'postTrophies' : '80' },
		{'postImage' : '5.jpg', 'postTrophies' : '45' },
		{'postImage' : '6.jpg', 'postTrophies' : '67' },
		{'postImage' : '7.jpg', 'postTrophies' : '78' },
		{'postImage' : '8.jpg', 'postTrophies' : '' },
		{'postImage' : '9.jpg', 'postTrophies' : '1234' },
		{'postImage' : '10.jpg', 'postTrophies' : '232' },
		{'postImage' : '11.jpg', 'postTrophies' : '867' },
		{'postImage' : '12.jpg', 'postTrophies' : '968' },
		{'postImage' : '13.jpg', 'postTrophies' : '3984' },
		{'postImage' : '14.jpg', 'postTrophies' : '46' },
		{'postImage' : '15.jpg', 'postTrophies' : '34' },
		{'postImage' : '16.jpg', 'postTrophies' : '12' }
	]

	$scope.viewOptions = "thumbnails";
	$scope.changeView = function(){
		if ($scope.viewOptions === "thumbnails")
			$scope.viewOptions = "list";
		else
			$scope.viewOptions = "thumbnails";
	};

	$scope.profile = [
		{
			'profileUsername' = 'yinnette', 
			'profile'
		}
	]





}]);