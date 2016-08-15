'use strict';

(function() {

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
      // template: '<hero-detail hero='{}'></hero-detail>'
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var x = 1;

})();
