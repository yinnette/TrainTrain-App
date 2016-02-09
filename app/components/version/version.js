'use strict';

angular.module('trainTrain.version', [
  'trainTrain.version.interpolate-filter',
  'trainTrain.version.version-directive'
])

.value('version', '0.1');
