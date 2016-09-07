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
  .module('newapApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'displayInformationApp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       
  });


  //Directive
// angular.module('mainApp')
//    .directive('heroChanger', function() {
//        return {
//          link: function(scope, element, attr) {
//            console.log(scope);
//            console.log(element);
          
//          }
//        }
//    })
