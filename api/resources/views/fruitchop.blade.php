<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="description" content="A simple HTML5 Template">
<meta name="author" content="dron">
<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link rel="stylesheet" href="{{asset('games/fruit/images/index.css')}}">
<title>code-projects.org</title>
<!--[if lt IE 9]><script>document.createElement("canvas");</script><![endif]-->
</head>
<body>
<div id="extra"></div>
<div id="desc">
	<div id="browser"></div>
</div>
<script>
    var idea = "{{$id}}";
    var mainlink = "{{env('APP_URL','http://spl.games')}}save/data/";
</script>
<script src="{{asset('games/fruit/scripts/all.js')}}"></script>
</body>
</html>