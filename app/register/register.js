'use strict';

angular.module('trainTrain.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
	var ref = new Firebase("https://traintrain.firebaseio.com/");






}]);