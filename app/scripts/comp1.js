(function(){


	angular.module('mainApp')
	   .component('skill', {
		  templateUrl: 'views/skill.html',   	  
	   	  controller: function(){
		  	var $ctrl = this;

			$ctrl.skills = ['HTML','JavaScript','CSS', 'LESS', 'SCSS', 'PHP', 'Java', 'C', 'Drupal', 'WordPress', 'Angular.js', 'Git', 'Docker'];

			$ctrl.newskills = ['HTML,','JavaScript,','CSS,'];

			$ctrl.choose = function(){
				// filter out duplicate chosen skills
				var temp = $ctrl.chosen;
				var chosed = [];
				temp.forEach(function(item) {
					item += ',';
					chosed.push(item);
				});
				var dup = $ctrl.newskills; 
				chosed = chosed.filter(function(val) {
					return dup.indexOf(val) === -1;
				});
				$ctrl.newskills = $ctrl.newskills.concat(chosed);
			};
		  }

	    });



})();
