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

simpleToDoApp.constant('AppConfig', {API_HOST: 'http://192.168.178.56:3000/'});
//simpleToDoApp.constant('AppConfig', {API_HOST: 'http://moellenbeck-t.tunnlr.com/'});
