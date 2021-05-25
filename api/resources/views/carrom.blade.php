<!DOCTYPE html>
<html>
<head>
	<title> Carrimboard </title>
	<link rel="stylesheet" type="text/css" href="{{asset('games/carrom/css/style.css')}}">
</head>
<body >

<div id="board">
	<div class="label" id="top">Player 1</div>
	<div class="label" id="bottom">Player 2</div>

	<canvas class="cnv" id="canvas" height="550" width="550"></canvas>
	<canvas class="cnv" id="back" height="550" width="550"></canvas>

	<div class="pocket" id="pocket0"></div>
	<div class="pocket" id="pocket1"></div>
	<div class="pocket" id="pocket2"></div>
	<div class="pocket" id="pocket3"></div>

<div id="menu-box">
	<div class="btn" id="btn-start-game">Start Game</div>

</div>

<div id="toast">
Hello World
</div>
	

</div>

<script type="text/javascript" src="{{asset('games/carrom/js/util.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/point.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/board.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/gatti.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/target.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/hole.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/player.js')}}"></script>
<script type="text/javascript" src="{{asset('games/carrom/js/script.js')}}"></script>
</body>
</html>