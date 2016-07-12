'use strict';

/**
 * @ngdoc overview
 * @name newapApp
 * @description
 * # newapApp
 *
 * Main module of the application.
 */
angular
  .module('mainApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
