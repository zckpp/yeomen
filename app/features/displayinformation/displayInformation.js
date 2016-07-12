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
  .module('displayInformationApp', [
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
    $routeProvider.when('/test', {
        templateUrl: 'features/displayinformation/partials/displayinformation.html',
        controller: 'displayInformationController'
      })
      
  });
