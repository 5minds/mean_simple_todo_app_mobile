'use strict';
  
angular.module('simpleToDoApp')
  .controller('TaskIndexCtrl', function($scope, $location, $window, Task, _) {

    $scope.search_string = "";

    $scope.tasks = Task.query();


    $scope.$watch('search_string', function() {
      $scope.doSearch();
    });

    $scope.doSearch = function() {
        if ($scope.search_string == '') {
          $scope.tasks = Task.query();
        } else {
          $scope.tasks = Task.query({q: $scope.search_string});
        }
    };
    

    $scope.newTask = function() {
      $location.path('/new');
    }

    $scope.editTask = function(task) {
      $location.path('/edit/' + task._id);
    };

    $scope.changeTaskState = function(task) {
      var doChange = true;

      if (!task.done) {
        doChange = $window.confirm("Finish task '" + task.title + "'?");
      }

      if (doChange) {
        var finishTask = new Task(task);
        finishTask.done = !finishTask.done;

        finishTask.$update({}, function() {
          $scope.doSearch();
        });
      }
    };
  });