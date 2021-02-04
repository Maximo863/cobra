(function () {

	var canvas, ctx;

	function main ( ) {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d"); 
	}

	
	requestAnimFrame = (function () {
		var func = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame 	||
		    window.mozRequestAnimationFrame 	||
		    window.oRequestAnimationFrame 		||
		    window.msRequestAnimationFrame 		||
		    function ( callback, element ) {
		    	window.setTimeout( callback, 1000 / interval ) ;
		    };
		    
		return function (callback, element) {
		    func.apply(window, [callback, element]);
		};

	})();
	
	main();
})();