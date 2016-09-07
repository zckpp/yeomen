(function(){


angular.module('mainApp' ,[])
       .component('chart', {
		templateUrl: 'views/main.html',
		transclude: true,
		controller:  function ($scope){
			var $ctrl = this;

			$ctrl.achivement = 
			  { 
			    age: 24, 
			    code: 111,
			    hour: 233,
			    project: 5
			  };

			$ctrl.addup1 = function() {
			  $ctrl.achivement.age += 1;
			  updateSVG();		
			};

			$ctrl.addup2 = function() {
			  $ctrl.achivement.code += 10;
			  updateSVG();
			};

			$ctrl.addup3 = function() {
			  $ctrl.achivement.hour += 10;
			  updateSVG();
			};

			$ctrl.addup4 = function() {
			  $ctrl.achivement.project += 1;
			  updateSVG();
			};

			//draw svg
			var Svg = function(){

				var data = $.map($ctrl.achivement, function(value, index) {
				  return [value];
				});

		
				var width = 420
				   ,barHeight = 20;

				var x = d3.scale.linear()
				    .range([0, width]);

				x.domain([0, d3.max(data)]);

				var chart = d3.select(".chart")
				    .attr("width", width)
				    .attr("height", barHeight * data.length)
			
				var bar = chart.selectAll("g")
				  .data(data)
				  .enter().append("g")
				  .attr("transform", function(d, i) { 
				  	return "translate(0," + i * barHeight + ")"; });

				bar.append("rect")
				  .attr("width", function(d,i) {
				  		return d;
				  })
				  .attr("height", barHeight - 1);

				bar.append("text")
				  .attr("x", function(d) { return d; })
				  .attr("y", barHeight / 2)
				  .attr("dy", ".35em")
				  .text(function(d) { return d; })

			
				  bar.transition();

				function type(d) {
				  d.value = +d.value; // coerce to number
				  return d;
				}

			}

			//update svg with new data
			function updateSVG(){
				var data = $.map($ctrl.achivement, function(value, index) {
    			  return [value];
				});

		
				var width = 420
				   ,barHeight = 20;

				var x = d3.scale.linear()
				    .range([0, width]);

				x.domain([0, d3.max(data)]);

				var chart = d3.select(".chart")
				    .attr("width", width)
				    .attr("height", barHeight * data.length)
			
				var bar = chart.selectAll("g")
				  .data(data)
				  .attr("transform", function(d, i) { 

				  	return "translate(0," + i * barHeight + ")"; });

  				bar.select("rect")
				  .attr("width", function(d,i) {
				  		return d;
				  })
				  .attr("height", barHeight - 1)

				bar.select("text")
				  .attr("x", function(d) { return d; })
				  .attr("y", barHeight / 2)
				  .attr("dy", ".35em")
				  .text(function(d) { return d; })
				  bar.transition();

				function type(d) {
				  d.value = +d.value; // coerce to number
				  return d;
				}
			}

			Svg();

   		},
    });

})();
