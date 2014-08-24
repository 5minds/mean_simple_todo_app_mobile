'use strict';

angular.module('simpleToDoApp').factory('Task', function($resource, AppConfig) {

  var host = AppConfig.API_HOST || 'http://localhost:3000/';

  return $resource(host + 'tasks/:id', 
          {id: '@_id'},
          {'update': { 'method': 'PUT'}}
    );
});