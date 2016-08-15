(function(){


angular.module('mainApp')
       .controller('testC', function testC(){
	        this.name = 'Batman';
       })
	   .component('testName', {
		  template: '<span>lalala{{$ctrl.name}}</span>',
		  controller: 'testC',
		  bindings: {
		    name: '='
		  }
	    });



})();
