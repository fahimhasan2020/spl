<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="x-ua-compatible" content="IE=edge">
		<meta charset="utf-8">
		<title>Chess</title>
		<link rel="stylesheet" href="https://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css">
		<link rel="stylesheet" href="{{asset('css/chess.css')}}">
	</head>
	<body>
		<div id="content">
			<div id="chessboard" role="main"></div>
			<div id="clear"></div>
		</div>
		<div id="dim"></div>
		<script src="https://code.jquery.com/jquery-1.9.0.min.js"></script>
		<script src="https://code.jquery.com/ui/1.10.0/jquery-ui.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.2/jquery.ui.touch-punch.min.js"></script>
		<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/augment.js/1.0.0/augment.min.js"></script><![endif]-->
		<script src="{{asset('css/chess.min.js')}}"></script>
		<script>
			$(makeChessGame);
		</script>
	</body>
</html>>
