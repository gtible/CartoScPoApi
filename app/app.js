'use strict';

/*
 * Declare app level module which depends on filters, and services
 */
angular.module('apiCarto', [
  'ngRoute',
  // 'ngAnimate',
  'ngSanitize',
  // 'ui.bootstrap',
  //'bib.controller.navbar',
  'apiCarto.controllers.home',
  'apiCarto.controllers.centersList',
  'apiCarto.controllers.center',
  'apiCarto.services',
  'apiCarto.directive.autoGrow'
  ])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'home'
  });

  $routeProvider.when('/center', {
  	templateUrl: 'views/center.html',
    controller: 'center'
  });

  $routeProvider.when('/center/:center_id', {
    templateUrl: 'views/centerSelected.html',
    controller: 'center'
  });

  $routeProvider.when('/centersList', {
    templateUrl: 'views/centersList.html',
    controller: 'centersList'
  });
 
  $routeProvider.otherwise({redirectTo: '/'});
}])
.constant('_', _);
