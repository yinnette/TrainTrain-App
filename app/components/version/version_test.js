'use strict';

describe('trainTrain.version module', function() {
  beforeEach(module('trainTrain.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
