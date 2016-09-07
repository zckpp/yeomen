(function(){


angular.module('mainApp')
   .component('resume', {
	  templateUrl: 'views/resume.html',   	  
   	  controller: function(){
	  	var $ctrl = this;
	  	$ctrl.achivement = 
		  { 
		    age: 24, 
		    code: 12980,
		    hour: 2112,
		    project: 10
		  };

		$ctrl.addup1 = function() {
		  $ctrl.achivement.age += 1;		
		};

		$ctrl.addup2 = function() {
		  $ctrl.achivement.code += 100;
		};

		$ctrl.addup3 = function() {
		  $ctrl.achivement.hour += 10;
		};

		$ctrl.addup4 = function() {
		  $ctrl.achivement.project += 1;
		};
	  }
	});

})();
