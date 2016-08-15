        // {} = object
        // [] = array
        // '' = string
        // functions 

        // {
        //    name: 'nice',
        //    number: 11111111,
        // }
'use strict';


    angular.module('mainApp')
           .controller('mainController', function mainController($scope){

        $scope.achivement = 
          { 
            age: 24, 
            code: 1111111,
            hour: 2333333,
            project: 5
          };

        $scope.skills =
        ['HTML','JavaScript','CSS', 'LESS', 'SCSS', 'PHP', 'Java', 'C', 'Drupal', 'WordPress', 'Angular.js', 'Git', 'Docker'];

        $scope.newskills = [];

        $scope.addup1 = function() {
          $scope.achivement.age += 1;
        };

        $scope.addup2 = function() {
          $scope.achivement.code += 10;
        };

        $scope.addup3 = function() {
          $scope.achivement.hour += 10;
        };

        $scope.addup4 = function() {
          $scope.achivement.project += 1;
        };
        $scope.choose = function(){
          // filter out duplicate chosen skills
            var temp = $scope.chosen;
            temp = temp.filter(function(val) {
              return $scope.newskills.indexOf(val) === -1;
            });
            // console.log(temp);
            $scope.newskills = $scope.newskills.concat(temp);
        };

    });

