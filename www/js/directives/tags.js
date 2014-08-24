
angular.module('simpleToDoApp')
  .directive('tags', function() {
    return {
      restrict: 'E',
      scope: {'tags': '=data'},
      template: '<span class="badge" ng-repeat="tag in tags">{{tag}}</span>'
    };
  });