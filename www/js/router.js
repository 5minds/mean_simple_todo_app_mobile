'use strict';

angular.module('simpleToDoApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/tasks/index.html',
        controller: 'TaskIndexCtrl'
      }).
      when('/new', {
        templateUrl: 'partials/tasks/new.html',
        controller: 'TaskNewCtrl'
      }).
      when('/edit/:taskId', {
        templateUrl: 'partials/tasks/edit.html',
        controller: 'TaskEditCtrl'
      });
  }
]);
