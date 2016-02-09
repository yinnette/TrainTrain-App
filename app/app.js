'use strict';

// Declare app level module which depends on views, and components
angular.module('trainTrain', [
  'ngRoute',
  'firebase',
  'trainTrain.home',
  'trainTrain.login',
  'trainTrain.register', 
  'trainTrain.profile'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});




}]);
