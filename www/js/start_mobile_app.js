'use strict';

document.addEventListener('deviceready', function() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['simpleToDoApp']);
    });

}, false);

var simpleToDoApp = angular.module('simpleToDoApp', [
  'ngTouch', 
  'ngRoute',
  'ngResource',
  'underscore'
  ]);

simpleToDoApp.constant('AppConfig', {API_HOST: 'http://www.mindassist.net:8080/'});
//simpleToDoApp.constant('AppConfig', {API_HOST: 'http://moellenbeck-t.tunnlr.com/'});
