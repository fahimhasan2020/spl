<!DOCTYPE html>
<html>
<head>
	<title>Crazy Racing</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	<script type="text/javascript" src="{{asset('games/runner/lib/lufylegend-1.9.7.simple.min.js')}}"></script>
	
	 <script>
    var idea = "{{$id}}";
    var mainlink = "{{env('APP_URL','http://spl.games')}}save/data/";
    
	</script>
	<script type="text/javascript" src="{{asset('games/runner/js/ytMain.js')}}"></script>
</head>
<body>
	<div id="mylegend">Loading……</div>
</body>
</html>