var square = (function() {
	'use strict';

	var ctx;
	var size;
	var x;
	var y;
	var canvas;
	//funçoes
	function setCtx ( arg ) {
		ctx =  arg;
	};

	function setSize ( arg ) {
		size = arg;
	};

	function setCanvas ( w, h ) {
		canvas = { W : w, H : h }
	}
	//ff

	//FG
	function getX ( ) {
		return x;	
	}

	function getY ( ) {
		return y;	
	}
	//Ff

	function draw ( ) {
		ctx.fillStyle = "#336633";
		ctx.beginPath();
		ctx.fillRect( x * size, y * size, size, size);			
		ctx.closePath();
	};

	return{
		setCtx : setCtx,
		setSize : setSize,
		setCanvas : setCanvas,
		draw : draw,
		getX : getX,
		getY : getY
	};
}());