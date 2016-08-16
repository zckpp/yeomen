(function(){


angular.module('mainApp' ,[])
       .component('hero', {
		templateUrl: 'views/main.html',
		transclude: true,
		controller:  function (){
			var $ctrl = this;

			$ctrl.achivement = 
			  { 
			    age: 24, 
			    code: 1111111,
			    hour: 2333333,
			    project: 5
			  };

			$ctrl.skills = ['HTML','JavaScript','CSS', 'LESS', 'SCSS', 'PHP', 'Java', 'C', 'Drupal', 'WordPress', 'Angular.js', 'Git', 'Docker'];

			$ctrl.newskills = [];

			$ctrl.addup1 = function() {
			  $ctrl.achivement.age += 1;
			};

			$ctrl.addup2 = function() {
			  $ctrl.achivement.code += 10;
			};

			$ctrl.addup3 = function() {
			  $ctrl.achivement.hour += 10;
			};

			$ctrl.addup4 = function() {
			  $ctrl.achivement.project += 1;
			};

			$ctrl.choose = function(){
			  // filter out duplicate chosen skills
			    var temp = $ctrl.chosen;
			    temp = temp.filter(function(val) {
			      return $ctrl.newskills.indexOf(val) === -1;
			    });
			    // console.log(temp);
			    $ctrl.newskills = $ctrl.newskills.concat(temp);
			};

   		},
    });

angular.module('mainApp')
   .directive('heroChanger', function() {
   		return {
   			link: function(scope, element, attr) {
   				console.log(scope);
   				console.log(element);
   				
   			}
   		}
   })

})();
