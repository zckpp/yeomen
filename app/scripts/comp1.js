(function(){


	angular.module('mainApp')
	   .component('skill', {
		  templateUrl: 'views/skill.html',   	  
	   	  controller: function(){
		  	var $ctrl = this;

			$ctrl.skills = ['HTML','JavaScript','CSS', 'LESS', 'SCSS', 'PHP', 'Java', 'C', 'Drupal', 'WordPress', 'Angular.js', 'Git', 'Docker'];

			$ctrl.newskills = [];

			$ctrl.choose = function(){
				// filter out duplicate chosen skills
				var temp = $ctrl.chosen;
				var dup = $ctrl.newskills; 
				temp = temp.filter(function(val) {
				return dup.indexOf(val) === -1;
				});
				$ctrl.newskills = $ctrl.newskills.concat(temp);
			};
		  }

	    });



})();
