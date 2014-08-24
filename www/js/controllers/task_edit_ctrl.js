'use strict';

angular.module('simpleToDoApp')
  .controller('TaskEditCtrl', function($scope, $location, $routeParams, Task) {

    $scope.task = Task.get({id: $routeParams.taskId}, function(task) {
      $scope.task = task;
      $scope.tags = task.tags;
    });

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

      $scope.task.$update(function(task) {
        $location.path('/');
      }, function(err) {
        console.log(err);
      });
    };
  });