'use strict';

angular.module('simpleToDoApp')
  .controller('TaskNewCtrl', function($scope, $location, Task) {

    $scope.task = {
      title: null,
      note: null,
      tags: []
    };

    $scope.prepareTags = function() {
      var tags = [];

      if (typeof($scope.tags) === 'string') {
        $scope.tags.split(',').forEach(function(tag) {
          tag = tag.trim();

          if (tag != "") {
            tags.push(tag);
          }
        }); 

        $scope.task.tags = tags;
      } else {
        $scope.task.tags = [];
      }

    };

    $scope.cancel = function() {
      $location.path('/');
    };

    $scope.saveTask = function() {

      $scope.prepareTags();

      var task = new Task($scope.task);

      task.$save(function(task) {
        $location.path('/');
      }, function(err) {
        console.log(err);
      });
    };
  });