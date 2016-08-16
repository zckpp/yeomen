(function(){


angular.module('mainApp')
   .component('testName', {
	  template: '<span class="row">lalala{{$ctrl.name}} {{$ctrl.address}}</span>',
   	  
   	  bindings: {
	    name: '=',
	    address: '='
	  },
   	  
   	  controller: function(){
	  	this.name = 'Batman';
	  }

    });



})();
